import { createNode } from "./createNode.js";

/**
 * header를 생성해서 Node를 반환합니다.
 * 반환된 Node를 main.js에서 body에 append해주세요.
 */
export function answerSectionGenerator() {
  let resultNode = createNode("section", "answerSection");

  // id index 생성
  let index = createNode("div", "index");

  let gptSide = createNode("div", null, "gptSide");
  gptSide.innerText = "GPT ANSWER";
  index.append(gptSide);

  let scoreBoard = createNode("div", null, "scoreboard");
  let sIndex = createNode("div", null, "scoretable");
  sIndex.innerText = "GPT가 받은 경고";
  scoreBoard.append(sIndex);

  let score = createNode("div", "score");
  score.innerText = "0 : 0";
  scoreBoard.append(score);
  index.append(scoreBoard);

  let userSide = createNode("div", null, "userSide");
  userSide.innerText = "USER ANSWER";
  index.append(userSide);

  // id wordboard 생성
  let board = createNode("div", "wordboard");

  let boardGpt = createNode("div", "boardarea_gpt");
  let dummyG = createNode("div");
  dummyG.innerText = "dummy Answers";
  dummyG.style.color = "#fdf4e8";
  boardGpt.append(dummyG);
  board.append(boardGpt);

  let boardBlank = createNode("div", "boardarea_blank");
  let foldbtn = createNode("button", "foldBtn");
  foldbtn.innerText = "》";
  foldbtn.style.cssText = "--click_toggle: -90deg;";
  boardBlank.append(foldbtn);
  board.append(boardBlank);

  let boardUser = createNode("div", "boardarea_user");
  let dummyU = createNode("div");
  dummyU.innerText = "dummy Answers";
  dummyU.style.color = "#fdf4e8";
  boardUser.append(dummyU);
  board.append(boardUser);

  resultNode.append(index);
  resultNode.append(board);

  //
  let msg = createNode("div", "message");
  resultNode.append(msg);

  return resultNode;
}

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
