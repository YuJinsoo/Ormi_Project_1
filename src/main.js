import { headerGenerator } from "./component/header.js";
import { inputSectionGenerator } from "./component/inputSection.js";
import { answerSectionGenerator } from "./component/answerSection.js";
import { footerGenerator } from "./component/footer.js";

import * as utils from "./utils.js";
import { openLoading, closeLoading } from "./loading.js";
import { resetDataKo } from "./dataset/dataset_ko.js";
import { resetDataEn } from "./dataset/dataset_en.js";

// import "./dataset_ko.js";

// html 생성
const $body = document.querySelector("body");
const $header = headerGenerator();
const $infoSection = inputSectionGenerator();
const $ansSection = answerSectionGenerator();
const $footer = footerGenerator();

$body.prepend($header);
$body.append($infoSection);
$body.append($ansSection);
$body.append($footer);

// 이벤트 발생할 node들 get
const $selbox = document.querySelector("#langselect");
const $input = document.querySelector("input");
const $answerBtn = document.querySelector("#answerBtn");
const $regameBtn = document.querySelector("#regameBtn");
const $warnToGptBtn = document.querySelector("#warnBtn");
const $boardarea_user = document.querySelector("#boardarea_user");

let selected_lang = "한국어(Korean)";
//학습 데이터로 data 변수 세팅
let data = [];
data = resetDataKo(data);

// 언어선택 이벤트
$selbox.addEventListener("change", (e) => {
  // console.log(e)
  //idx = e.target.selectedIndex;
  selected_lang = $selbox.options[$selbox.selectedIndex].value;
  if (selected_lang === "한국어(Korean)") {
    data = resetDataKo(data);
  } else {
    data = resetDataEn(data);
  }
  console.log(data);
  $startBtn.disabled = false;
});

// 시작버튼 이벤트
const $startBtn = document.querySelector("#startBtn");
$startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openLoading();
  console.log(e);
  console.log(e.target);
  e.target.disabled = true;

  document.querySelector("#warnBtn").disabled = false;
  document.querySelector("#answerBtn").disabled = false;

  utils.chatGptAPI(data);
});

// 답변 보내기 버튼 이벤트
$answerBtn.addEventListener("click", (e) => {
  if ($input.value === "") {
    alert("아무 입력 없이 클릭하면 안됩니다!");
    return;
  }
  e.preventDefault(); // 화면 멈춤. 아무런 액션이 일어나지 않음
  openLoading();
  console.log(e);
  console.log($boardarea_user);

  let userInputData = $input.value;
  let wrapInputData = utils.sendJsonAnswer(userInputData);
  $input.value = "";

  utils.answers.user.push(userInputData);
  utils.checkCorrectWord(userInputData, "user");

  // 학습 data 갱신
  utils.appendData(data, "user", wrapInputData);
  // 태그 추가해서 내용 표현
  utils.answerTagAdder(userInputData, $boardarea_user);

  // api로 내 답변 전송
  utils.chatGptAPI(data);
});

//경고횟수 늘리는 이벤트
$warnToGptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.disabled = true;
  utils.checkWarnCount("assistant");
});

// regame 이벤트
$regameBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});
