import { headerGenerator } from "./component/header.js";
import { inputSectionGenerator } from "./component/inputSection.js";
import { answerSectionGenerator } from "./component/answerSection.js";
import { footerGenerator } from "./component/footer.js";

// import "./loading.js";
import * as func from "./functions.js";
// import "./dataset_ko.js";

// html 생성
const $body = document.querySelector("body");
const $header = headerGenerator();
const $infoSection = infoSectionGenerator();
const $ansSection = answerSectionGenerator();
const $footer = footerGenerator();

$body.prepend($header);
$body.append($infoSection);
$body.append($ansSection);
$body.append($footer);

let selected_lang;

//학습 데이터로 data 변수 세팅
let data = [];
data = resetData(data);

// 이벤트 발생할 node들 선택
const $selbox = document.querySelector("#langselect");
const $input = document.querySelector("input");
const $answerBtn = document.querySelector("#answerBtn");
const $boardarea_user = document.querySelector("#boardarea_user");

// 언어선택 이벤트
$selbox.addEventListener("change", (e) => {
  // console.log(e)
  //idx = e.target.selectedIndex;
  selected_lang = $selbox.options[$selbox.selectedIndex].value;

  data = resetData(data);

  $startBtn.disabled = false;
});

// 시작버튼 이벤트
const $startBtn = document.querySelector("#startBtn");
$startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //   openLoading();
  console.log(e);
  console.log(e.target);
  e.target.disabled = true;

  document.querySelector("#warnBtn").disabled = false;
  document.querySelector("#answerBtn").disabled = false;

  func.chatGptAPI(data);
});

//경고횟수 늘리는 이벤트
const $warnToGptBtn = document.querySelector("#warnBtn");
$warnToGptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.disabled = true;
  func.checkWarnCount("assistant");
});

// 답변 보내기 버튼 이벤트
$answerBtn.addEventListener("click", (e) => {
  if (document.querySelector("input").value === "") {
    alert("아무 입력 없이 클릭하면 안됩니다!");
    return;
  }
  console.log(e);
  e.preventDefault(); // 화면 멈춤. 아무런 액션이 일어나지 않음

  let userInputData = $input.value;
  let wrapInputData = func.sendJsonAnswer(userInputData);
  $input.value = "";

  func.answers.user.push(userInputData);
  func.checkCorrectWord(userInputData, "user");

  // 학습 data 갱신
  func.appendData(data, "user", wrapInputData);
  // 태그 추가해서 내용 표현
  console.log("here");
  console.log($boardarea_user);
  func.answerTagAdder(userInputData, $boardarea_user);
  // api로 내 답변 전송
  func.chatGptAPI(data);
});
