import { createNode } from "./createNode.js";

/**
 * header를 생성해서 Node를 반환합니다.
 * 반환된 Node를 main.js에서 body에 append해주세요.
 */
function answerSectionGenerator() {
  let resultNode = createNode("section", "answerSection");

  // score
  const bigScore = createNode("div", null, "bigScore");
  const gScore = createNode("div", null, "scoreValue gptScore");
  gScore.innerHTML = "0";
  const versus = createNode("div", null, "scoreValue versusText");
  versus.innerHTML = "vs";
  const uScore = createNode("div", null, "scoreValue userScore");
  uScore.innerHTML = "0";
  bigScore.append(gScore, versus, uScore);
  resultNode.append(bigScore);

  // id index 생성
  let index = createNode("div", "index");

  let gptSide = createNode("div", null, "gptSide");
  gptSide.innerText = "GPT ANSWER";
  index.append(gptSide);

  let scoreBoard = createNode("div", null, "scoreboard");
  let sIndex = createNode("div", null, "scoretable");
  sIndex.innerText = "단어 목록";
  scoreBoard.append(sIndex);
  index.append(scoreBoard);

  //   let score = createNode("div", "score");
  //   score.innerText = "0 : 0";
  //   scoreBoard.append(score);

  let userSide = createNode("div", null, "userSide");
  userSide.innerText = "USER ANSWER";
  index.append(userSide);

  // id wordboard 생성
  let board = createNode("div", "wordboard");

  let boardBlank = createNode("div", "boardarea_blank");
  let foldbtn = createNode("button", "foldBtn");
  foldbtn.innerText = "》";
  foldbtn.style.cssText = "--click_toggle: -90deg;";
  boardBlank.append(foldbtn);

  let boardGpt = createNode("div", "boardarea_gpt");
  let boardUser = createNode("div", "boardarea_user");

  wordBoardSet(boardUser, boardGpt);

  board.append(boardGpt);
  board.append(boardBlank);
  board.append(boardUser);

  resultNode.append(index);
  resultNode.append(board);

  //
  let msg = createNode("div", "message");
  resultNode.append(msg);

  return resultNode;
}

/**
 * 단어 보드의 공백때문에 UI깨짐 방지를 위해 dummy Node를 추가해주는 함수
 * @param {DOM Object} userSide id have to be boardarea_user
 * @param {DOM Object} gtpSide  id have to be boardarea_gpt
 * @returns
 */
function wordBoardSet(userSide, gptSide) {
  if (userSide.id === "boardarea_user" && gptSide.id === "boardarea_gpt") {
    let dummyG = createNode("div");
    dummyG.innerText = "dummyAnswers";
    dummyG.style.color = "#fdf4e8";
    gptSide.append(dummyG);

    let dummyU = createNode("div");
    dummyU.innerText = "dummyAnswers";
    dummyU.style.color = "#fdf4e8";
    userSide.append(dummyU);
  }
  return;
}

export { answerSectionGenerator, wordBoardSet };

/* 
<section id="answerSection">
    <div id="index">
        <div class="gptSide">GPT ANSWER</div>
        <div class="scoreboard">
            <div>경고횟수판</div>
            <div id="score">0:0</div>
        </div>
        <div class="userSide">USER ANSWER</div>
     </div>
     <div id="wordboard">
        <div id="boardarea_gpt"></div>
        <div id="boardarea_user"></div>
     </div>
     <div id="message"></div>
</section>
    */
