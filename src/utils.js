import { openLoading, closeLoading } from "./loading.js";

const count_max = 2;
let gpt_count = 0;
let user_count = 0;

let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

let answers = {
  gpt: [],
  user: [],
};

// 입력한 텍스트 전달 및 응답 수신
function chatGptAPI(data) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      let api_content = res.choices[0].message.content;

      if (api_content.indexOf("{") === -1 || api_content.indexOf("}") === -1) {
        throw new Error(`GPT API의 응답 형식이 맞지 않습니다. ${api_content}`);
      }

      let result = parseJsonAnswer(api_content);
      if (result === "") {
        return;
      }

      appendData(data, "assistant", api_content);
      answerTagAdder(result, document.querySelector("#boardarea_gpt"));

      document.querySelector("#warnBtn").disabled = false;

      checkCorrectWord(result, "assistant");
      printGptMessage(api_content);
    })
    .catch((e) => {
      console.log(e);
      alert("새로고침 후 게임을 다시 시작해 주세요!");
    })
    .finally(() => {
      closeLoading();
    });
}

// gptAPI로 온 답변을 JSON으로 파싱하여 데이터로 저장
function parseJsonAnswer(text) {
  // \" 문자가 들어가는 경우가 있어서 제외.
  if (text.indexOf("\\") !== -1) {
    text = text.replaceAll("\\", "");
  }

  // JSON 형식은 모두 큰따옴표로 묶어줘야 함
  let tmp_text = text
    .slice(text.indexOf("{"), text.indexOf("}") + 1)
    .replaceAll("'", '"');

  console.log(tmp_text);
  let json_obj = JSON.parse(tmp_text);
  answers.gpt.push(json_obj.answer);
  return answers.gpt[answers.gpt.length - 1];
}

function sendJsonAnswer(user_input) {
  let text = `{"answer":"${user_input}"}`;
  return text;
}

function answerTagAdder(text, parentNode) {
  let obj = document.createElement("p");
  obj.classList.add("answer");
  obj.innerText = text;

  console.log(obj);
  console.log(parentNode);
  parentNode.prepend(obj);
  return;
}

// 제시한 단어가 앞단어와 맞는지 확인
function checkCorrectWord(word, side) {
  let latest_word;
  let result;
  let last_letter;
  let first_letter;
  if (side === "user") {
    latest_word = answers.gpt.slice(-1).pop();
    //console.log(latest_word);

    last_letter = latest_word.charAt(latest_word.length - 1);
    first_letter = word.slice(0, 1);
    result = last_letter !== first_letter ? false : true;
  } else if (side == "assistant") {
    if (answers.user.length === 0) {
      return;
    }
    latest_word = answers.user.slice(-1).pop();

    last_letter = latest_word.charAt(latest_word.length - 1);
    first_letter = word.slice(0, 1);
    result = last_letter !== first_letter ? false : true;
  }

  if (result === false) {
    checkWarnCount(side);
  }
  return;
}

// checkCorrectWord()의 result가 false 일때 경고 점수 카운트, 승리알림
function checkWarnCount(side) {
  if (side === "user") {
    user_count++;
  } else if (side === "assistant") {
    gpt_count++;
  }
  changeScoreTag();

  if (gpt_count >= count_max) {
    alert("user 승리!");
  }

  if (user_count >= count_max) {
    alert("user 패배!");
  }
  console.log(`gpt : ${gpt_count}, user: ${user_count}`);
  return;
}

function changeScoreTag() {
  let socre = document.querySelector("#score");
  socre.innerText = `${gpt_count} : ${user_count}`;
  return;
}

// gpt와 의 대화 data 추가하는 함수
function appendData(data, side, dialogdata) {
  let obj = { role: `${side}`, content: `${dialogdata}` };
  data.push(obj);
  return data;
}

function printGptMessage(text) {
  let mes = document.querySelector("#message");
  mes.innerText = text;
  return;
}

export {
  chatGptAPI,
  sendJsonAnswer,
  answerTagAdder,
  checkCorrectWord,
  checkWarnCount,
  changeScoreTag,
  appendData,
  printGptMessage,
  url,
  answers,
};
