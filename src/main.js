import { headerGenerator } from "./component/header.js";
import { infoSectionGenerator } from "./component/infoSection.js";
import { answerSectionGenerator } from "./component/answerSection.js";
import { footerGenerator } from "./component/footer.js";

// html 생성
const $body = document.querySelector("body");
const $header = headerGenerator();
const $infoSection = infoSectionGenerator();
const $ansSection = answerSectionGenerator();
const $footer = footerGenerator();

$body.append($header);
$body.append($infoSection);
$body.append($ansSection);
$body.append($footer);

// 이벤트 발생할 node들 선택
const $selbox = document.querySelector("#langselect");
const $input = document.querySelector("input");
const $answerBtn = document.querySelector("#answerBtn");
const $boardarea_user = document.querySelector("#boardarea_user");

// 언어선택 이벤트
$selbox.addEventListener("change", (e) => {
  // console.log(e)
  idx = e.target.selectedIndex;
  selected_lang = $selbox.options[$selbox.selectedIndex].value;

  data = resetData(data);

  $startBtn.disabled = false;
});

// 시작버튼 이벤트
const $startBtn = document.querySelector("#startBtn");
$startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  console.log(e.target);
  e.target.disabled = true;

  document.querySelector("#warnBtn").disabled = false;
  document.querySelector("#answerBtn").disabled = false;

  chatGptAPI(data);
});

//경고횟수 늘리는 이벤트
const $warnToGptBtn = document.querySelector("#warnBtn");
$warnToGptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.disabled = true;
  checkWarnCount("assistant");
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
  let wrapInputData = sendJsonAnswer(userInputData);
  $input.value = "";

  answers.user.push(userInputData);
  checkCorrectWord(userInputData, "user");
  checkWarnCount();

  // 학습 data 갱신
  appendData(data, "user", wrapInputData);
  // 태그 추가해서 내용 표현
  answerTagAdder(userInputData, $boardarea_user);
  // api로 내 답변 전송
  chatGptAPI(data);
});
