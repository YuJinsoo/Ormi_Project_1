// header를 생성해서 Node를 반환합니다.
// 반환된 Node를 main.js에서 body에 append해주세요.

export function answerSectionGenerator() {
  let resultNode = document.createElement("section");
  resultNode.id = "answerSection";

  // id index 생성
  let index = document.createElement("div");
  index.id = "index";

  let gptSide = document.createElement("div");
  gptSide.classList.add("gptSide");
  gptSide.innerText = "GPT ANSWER";
  index.append(gptSide);

  let scoreBoard = document.createElement("div");
  scoreBoard.classList.add("scoreboard");
  let sIndex = document.createElement("div");
  sIndex.innerText = "GPT가 받은 경고";
  sIndex.classList.add("scoretable");
  scoreBoard.append(sIndex);

  let score = document.createElement("div");
  score.id = "score";
  score.innerText = "0:0";
  scoreBoard.append(score);
  index.append(scoreBoard);

  let userSide = document.createElement("div");
  userSide.classList.add("userSide");
  userSide.innerText = "USER ANSWER";
  index.append(userSide);

  // id wordboard 생성
  let board = document.createElement("div");
  board.id = "wordboard";

  let boardGpt = document.createElement("div");
  boardGpt.id = "boardarea_gpt";
  board.append(boardGpt);

  let boardBlank = document.createElement("div");
  boardBlank.id = "boardarea_blank";
  board.append(boardBlank);

  let boardUser = document.createElement("div");
  boardUser.id = "boardarea_user";
  board.append(boardUser);

  resultNode.append(index);
  resultNode.append(board);

  //
  let msg = document.createElement("div");
  msg.id = "message";
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
