import { headerGenerator } from "./component/header.js";
import { inputSectionGenerator } from "./component/inputSection.js";
import {
  answerSectionGenerator,
  wordBoardSet,
} from "./component/answerSection.js";
import { footerGenerator } from "./component/footer.js";
import { titleGenerator } from "./component/title.js";
import { startButtonGenerator } from "./component/start.js";

import * as utils from "./utils.js";
import { closeLoading, openLoading } from "./loading.js";
import { koWordAPI, testAPI } from "./wordSearchAPI.js";


// html 생성
const $body = document.querySelector("body");
const $header = headerGenerator();
const $infoSection = inputSectionGenerator();
const $ansSection = answerSectionGenerator();
const $footer = footerGenerator();
const $title = titleGenerator();
const $startBtnSection = startButtonGenerator();

$body.prepend($header);
$body.prepend($ansSection);
$body.prepend($infoSection);
$body.prepend($startBtnSection);
$body.prepend($title);
$body.append($footer);

$infoSection.classList.add("hidden");
$ansSection.classList.add("hidden");
//utils.answerButtonsDisplay(false, $infoSection, $ansSection);

// TODO 반응형 메뉴 리스트 이벤트 연결하기
// 이벤트 발생할 node들 get
const $selbox = document.querySelector("#langselect");
const $input = document.querySelector("#answerText");
const $startBtn = document.querySelector("#startBtn");
const $answerBtn = document.querySelector("#answerBtn");
const $regameBtn = document.querySelector("#regameBtn");
const $warnToGptBtn = document.querySelector("#warnBtn");
const $boardarea_user = document.querySelector("#boardarea_user");
const $foldBtn = document.querySelector("#foldBtn");
// const $menuCheck = document.querySelector("#menucheck");
const $modeButton = document.querySelector("#modeButton")
const $modeCheck = document.querySelector("#modeCheck");
const $dictmsg = document.querySelector("#dictmsg");
const $gptmsg = document.querySelector("#gptmsg");

let selected_lang = "Korean";
//학습 데이터로 data 변수 세팅
let data = [];
data = utils.gameStartSetting(data, selected_lang);

// koWordAPI("나무");

// 언어선택 이벤트
$selbox.addEventListener("change", (e) => {
  selected_lang = $selbox.options[$selbox.selectedIndex].value;
  $regameBtn.click();
});

// 시작버튼 이벤트
$startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openLoading();
  e.target.disabled = true;

  utils.answerButtonsDisplay(true, $infoSection, $ansSection);
  document.querySelector("#warnBtn").disabled = false;
  document.querySelector("#answerBtn").disabled = false;
  $dictmsg.innerText = '';

  // TODO 영어모드일때 사전api pass 추가 필요
  // 추출한 단어를 가진 promise를 리턴함
  let api_result = utils.chatGptAPI(data);
  api_result.then( word => {
    let dict_result = koWordAPI(word);
    dict_result.then( res => {
      utils.writeDictMsg($dictmsg, res);

      if (res === false){
        utils.checkScoreCount("user");
        return;
      }

      if (res.channel.total <= 1){
        //TODO 게임진행 구현
      }
      
    })
    .catch()
    .finally(()=>{
      closeLoading();
      utils.scrollToGame();
    });
  })
});


// 답변 보내기 버튼 이벤트
$answerBtn.addEventListener("click", (e) => {
  e.preventDefault(); // 화면 멈춤. 아무런 액션이 일어나지 않음
  if ($input.value === "") {
    // sweetalert2
    Swal.fire({
      icon: "error",
      title: "단어 입력",
      text: "아무 입력 없이 클릭하면 안됩니다!",
    });
    return;
  }
  openLoading();
  let userInputData = $input.value;
  let wrapInputData = utils.wrapToJsonForm(userInputData);
  $input.value = "";

  utils.answers.user.push(userInputData);
  utils.checkCorrectWord(userInputData, "user");

  utils.appendData(data, "user", wrapInputData);
  utils.answerTagAdder(userInputData, $boardarea_user);

  // 추출한 단어를 가진 promise를 리턴함
  let api_result = utils.chatGptAPI(data);
  api_result.then( word => {
    let dict_result = koWordAPI(word);
    dict_result.then( res => {
      utils.writeDictMsg($dictmsg, res);

      if (res === false){
        utils.checkScoreCount("user");
        return;
      }

      if (res.channel.total <= 1){
        //TODO 게임진행 구현
      }
      
    })
    .catch(e =>{
      //swal
      Swal.fire({icon: "warning",
      text: `${e}`})
    })
    .finally(()=>{
      closeLoading();
    });
  })
});

//경고횟수 늘리는 이벤트
$warnToGptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.disabled = true;
  utils.checkScoreCount("user");

  document.querySelector(".gptScore").classList.remove("bounceAnimation");
  document.querySelector(".gptScore").classList.add("bounceAnimation");
});

// 다시시작 버튼 이벤트
$regameBtn.addEventListener("click", (e) => {
  e.preventDefault();
  data = utils.gameStartSetting(data, selected_lang);
  utils.changeScoreTag();
  utils.answerButtonsDisplay(false, $infoSection, $ansSection);

  $startBtn.disabled = false;
  $answerBtn.disabled = true;
  $warnToGptBtn.disabled = true;
  $input.value = "";
  $gptmsg.innerText = "";
  $dictmsg.innerText = "";

  const gNodes = document.querySelector("#boardarea_gpt");
  const uNodes = document.querySelector("#boardarea_user");

  while (gNodes.firstChild) {
    gNodes.firstChild.remove();
  }
  while (uNodes.firstChild) {
    uNodes.firstChild.remove();
  }
  // or
  //gNodes.innerHTML = "";
  //uNodes.innerHTML = "";

  wordBoardSet(uNodes, gNodes);
  utils.scrollToTop();
});

// 접기버튼 클릭 이벤트 : 180도 회전 토글 기능
$foldBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const bd = document.querySelector("#wordboard");
  if (e.currentTarget.style.cssText === "--click_toggle: 90deg;") {
    e.currentTarget.style.cssText = "--click_toggle: -90deg;";
    bd.style.height = "35px";
    bd.style.overflow = "hidden";
  } else {
    e.currentTarget.style.cssText = "--click_toggle: 90deg;";
    bd.style.height = "300px";
    bd.style.overflow = "auto";
  }
});

// 토글 메뉴 창 이벤트
// $menuCheck.addEventListener("change", (e) => {
//   e.preventDefault();
//   const $menuWindow = document.querySelector("#menuMain");

//   if (e.target.checked) {
//     $menuWindow.style.cssText = "--click_slide: -30vw";
//   } else {
//     $menuWindow.style.cssText = "--click_slide: 30vw";
//   }
// });

//모드버튼
$modeButton.addEventListener("click", (e) =>{
  e.preventDefault;
  console.log($modeCheck.checked);
  $modeCheck.checked = !$modeCheck.checked;

  const $index = document.querySelector("#index");
  const $wordboard = document.querySelector("#wordboard");

  const $buttons = document.querySelectorAll(".btndafault");
  const $message = document.querySelector("#message");

  if ($modeCheck.checked === true) {
    $body.style.backgroundColor = "rgb(8, 14, 46)";
    $header.style.backgroundColor = "rgb(8, 14, 46)";
    $header.style.borderColor = "#828282";
    $footer.style.backgroundColor = "rgb(8, 14, 46)";
    $footer.style.borderColor = "#828282";

    $index.style.borderColor = "#828282";
    $infoSection.style.borderColor = "#828282";

    $wordboard.style.borderColor = "#828282";
    $message.style.color = "white";

    for (let n of $buttons) {
      n.style.boxShadow = "0 5px 10px 0 rgba(255, 255, 255, 0.8)";
    }
  } else {
    $body.style.backgroundColor = "White";
    $header.style.backgroundColor = "White";
    $header.style.borderColor = "#ddd";
    $footer.style.backgroundColor = "#eee";

    $index.style.borderColor = "#eee";
    $infoSection.style.borderColor = "#eee";

    $wordboard.style.borderColor = "#eee";
    $message.style.color = "black";

    for (let n of $buttons) {
      n.style.boxShadow = "0 5px 10px 0 rgba(0, 0, 0, 0.5)";
    }
  }
});
