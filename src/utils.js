import { openLoading, closeLoading } from "./loading.js";
import { resetDataKo } from "./dataset/dataset_ko.js";
import { resetDataEn } from "./dataset/dataset_en.js";

const count_max = 2;
let gpt_count = 0;
let user_count = 0;

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

const answers = {
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
      let api_content = res.choices[0].message.content;

      if (api_content.indexOf("{") === -1 || api_content.indexOf("}") === -1) {
        throw new Error(
          `GPT API의 응답 형식이 맞지 않습니다. message: ${api_content}`
        );
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
      Swal.fire({
        icon: "warning",
        title: "GPT 메시지",
        text: `GPT의 메시지를 확인해주세요! (새로시작 해야할 수 있습니다) ${e}`,
      });
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

  // JSON 형식은 큰따옴표로 묶어줘야 함
  let tmp_text = text
    .slice(text.indexOf("{"), text.indexOf("}") + 1)
    .replaceAll("'", '"');

  let json_obj = JSON.parse(tmp_text);
  answers.gpt.push(json_obj.answer);
  return answers.gpt[answers.gpt.length - 1];
}

function wrapToJsonForm(user_input) {
  let text = `{"answer":"${user_input}"}`;
  return text;
}

function answerTagAdder(text, parentNode) {
  let obj = document.createElement("p");
  obj.classList.add("answer");
  obj.innerHTML = `${text.slice(0, -1)}<strong>${text.slice(-1)}</strong>`;
  //obj.innerText = text;

  parentNode.prepend(obj);
  return;
}

// 제시한 단어가 적절한 단어인지 확인
function checkCorrectWord(word, side) {
  let latest_word;
  let result;
  let last_letter;
  let first_letter;
  if (side === "user") {
    latest_word = answers.gpt.slice(-1).pop();

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

  if (checkDuplicated(word)) {
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
    Swal.fire({
      icon: "success",
      title: "승리!",
      text: "USER 승리! 축하합니다!",
    });
  }

  if (user_count >= count_max) {
    Swal.fire({
      icon: "warning",
      title: "패배!",
      text: "GPT의 승리입니다. 다시 도전해보세요!",
    });
  }
  console.log(`gpt : ${gpt_count}, user: ${user_count}`);
  return;
}

// 경고점수 태그
function changeScoreTag() {
  let socre = document.querySelector("#score");
  socre.innerText = `${gpt_count} : ${user_count}`;
  return;
}

// 단어가 중복되었는지 확인
function checkDuplicated(word) {
  let result = false;
  let check1 = 0;
  let check2 = 0;

  if (answers.gpt.length === 1 || answers.user.length === 1) {
    return result;
  }
  check1 = String(answers.gpt.slice(0, -1)).indexOf(word);
  check2 = String(answers.user.slice(0, -1)).indexOf(word);

  if (check1 !== -1 || check2 !== -1) {
    Swal.fire({
      icon: "error",
      title: "단어 입력",
      text: "중복된 단어입니다.",
    });
    result = true;
  }

  return result;
}

// gpt와 의 대화 data 추가하는 함수
function appendData(data, side, dialogdata) {
  let obj = { role: `${side}`, content: `${dialogdata}` };
  data.push(obj);
  return data;
}

//api 메시지 출력
function printGptMessage(text) {
  let mes = document.querySelector("#message");
  mes.innerText = text;
  return;
}

// 게임 시작시 필요한 데이터 세팅
function gameStartSetting(data, selected_lang) {
  answers.gpt = [];
  answers.user = [];
  user_count = 0;
  gpt_count = 0;

  if (selected_lang === "한국어(Korean)") {
    data = resetDataKo(data);
  } else {
    data = resetDataEn(data);
  }
  return data;
}

export {
  chatGptAPI,
  wrapToJsonForm,
  answerTagAdder,
  checkCorrectWord,
  checkWarnCount,
  changeScoreTag,
  appendData,
  printGptMessage,
  checkDuplicated,
  gameStartSetting,
  url,
  answers,
};
