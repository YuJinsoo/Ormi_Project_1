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

/**
 * 입력한 학습 대화 전달 및 응답 수신
 * @param {Array} data gpt의 응답을 받을 학습 데이터 Array
 */
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

      const result = parseJsonAnswer(api_content);
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
      // sweetalert2
      Swal.fire({
        icon: "warning",
        title: "GPT 메시지",
        text: `GPT의 메시지를 확인해주세요! (새로시작 해야할 수 있습니다) ${e}`,
      });
      printGptMessage(api_content);
    })
    .finally(() => {
      closeLoading();
    });
}

/**
 * gptAPI로 온 답변을 JSON 형식으로 파싱하여 응답 저장 객체에 저장
 * @param {String} text
 * @returns {String} 끝말잇기 단어 출력
 */
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

/**
 * 사용자가 입력한 단어를 JSON의 object 형식으로 변환하여 반환
 * @param {String} user_input 사용자가 입력한 단어
 * @returns {String} JSON의 object 형식으로 반환
 */
function wrapToJsonForm(user_input) {
  const text = `{"answer":"${user_input}"}`;
  return text;
}

/**
 * parentNode로 지정된 Node에 text를 innerText로 가지는 p 태그 노드를 추가
 * @param {String} text
 * @param {DOM Node} parentNode
 * @returns
 */
function answerTagAdder(text, parentNode) {
  const obj = document.createElement("p");
  obj.classList.add("answer");
  obj.innerHTML = `${text.slice(0, -1)}<strong>${text.slice(-1)}</strong>`;

  parentNode.prepend(obj);
}

/**
 * 제시한 단어가 적절한 단어인지 확인학 규칙에 어긋날 경우 점수 반영
 * @param {String} word 입력한 단어
 * @param {String} side "user" 혹은 "assistant" 만 입력해야 합니다.
 * @returns
 */
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
}

// checkCorrectWord()의 result가 false 일때 경고 점수 카운트, 승리알림

/**
 * 경고 횟수를 카운트하고 초과했을 때 누구가 승리했는지 알림
 * @param {String} side "user" 혹은 "assistant" 만 입력해야 합니다.
 */
function checkWarnCount(side) {
  if (side === "user") {
    user_count++;
  } else if (side === "assistant") {
    gpt_count++;
  }
  changeScoreTag();

  if (gpt_count >= count_max) {
    // sweetalert2
    Swal.fire({
      icon: "success",
      title: "승리!",
      text: "USER 승리! 축하합니다!",
    });
  }

  if (user_count >= count_max) {
    // sweetalert2
    Swal.fire({
      icon: "warning",
      title: "패배!",
      text: "GPT의 승리입니다. 다시 도전해보세요!",
    });
  }
  console.log(`gpt : ${gpt_count}, user: ${user_count}`);
}

/**
 * 경고점수 태그에 점수를 수정
 */
function changeScoreTag() {
  const uSocre = document.querySelector(".userScore");
  uSocre.innerHTML = `${user_count}`;
  uSocre.classList.remove("bounceAnimation");
  uSocre.classList.add("bounceAnimation");

  const gSocre = document.querySelector(".gptScore");
  gSocre.innerHTML = `${gpt_count}`;
  gSocre.classList.remove("bounceAnimation");
  gSocre.classList.add("bounceAnimation");
}

/**
 * 단어가 중복되었는지 확인
 * @param {String} word 가장 최근에 입력된 단어
 * @returns {Boolean}
 */
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
    // sweetalert2
    Swal.fire({
      icon: "error",
      title: "단어 입력",
      text: "중복된 단어입니다.",
    });
    result = true;
  }

  return result;
}

/**
 * gpt와 의 학습 대화 data 추가하는 함수
 * @param {Array} data 학습 데이터
 * @param {String} side "user" 혹은 "assistant"
 * @param {String} dialogdata "conent"에 들어갈 대화 내용
 * @returns  {Array} 갱신된 data 학습 데이터
 */
function appendData(data, side, dialogdata) {
  const obj = { role: `${side}`, content: `${dialogdata}` };
  data.push(obj);
  return data;
}

/**
 * GPT의 api 메시지 출력
 * @param {String} text
 */
function printGptMessage(text) {
  const mes = document.querySelector("#gptmsg");
  mes.innerText = text;
}

/**
 * 게임 시작시 필요한 데이터 세팅 (학습데이터, 경고횟수 초기화, 단어 저장 객체 초기화)
 * @param {*} data
 * @param {*} selected_lang
 * @returns
 */
function gameStartSetting(data, selected_lang) {
  answers.gpt = [];
  answers.user = [];
  user_count = 0;
  gpt_count = 0;

  if (selected_lang === "Korean") {
    data = resetDataKo(data);
  } else {
    data = resetDataEn(data);
  }
  return data;
}

function answerButtonsDisplay(on, node1, node2) {
  if (on === true) {
    node1.classList.add("appear");
    node2.classList.add("appear");
    node1.classList.remove("disappear");
    node2.classList.remove("disappear");
    return;
  }
  node1.classList.add("disappear");
  node2.classList.add("disappear");
  node1.classList.remove("appear");
  node2.classList.remove("appear");
  return;
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
  answerButtonsDisplay,
  url,
  answers,
};
