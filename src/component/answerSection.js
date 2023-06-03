// header를 생성해서 Node를 반환합니다.
// 반환된 Node를 main.js에서 body에 append해주세요.

export function answerSectionGenerator() {
  let resultNode = document.createElement("section");
  resultNode.id = "answerSection";
  let tmp;

  // id index 생성
  let index = document.createElement("div");
  index.id = "index";

  tmp = document.createElement("div");
  tmp.classList.add("gptSide");
  tmp.innerText = "GPT ANSWER";
  index.append(tmp);

  tmp = document.createElement("div");
  tmp.classList.add("scoreboard");
  let tmp2 = document.createElement("div");
  tmp2.innerText = "경고횟수판";
  tmp.append(tmp2);
  tmp2 = document.createElement("div");
  tmp2.id = "score";
  tmp2.innerText = "0:0";
  tmp.append(tmp2);
  index.append(tmp);

  tmp = document.createElement("div");
  tmp.classList.add("userSide");
  tmp.innerText = "USER ANSWER";
  index.append(tmp);

  // id wordboard 생성
  let board = document.createElement("div");
  board.id = "wordboard";

  tmp = document.createElement("div");
  tmp.id = "boradarea_gpt";
  board.append(tmp);

  tmp = document.createElement("div");
  tmp.id = "boradarea_user";
  board.append(tmp);

  resultNode.append(index);
  resultNode.append(board);

  //
  tmp = document.createElement("div");
  tmp.classList.add("message");
  resultNode.append(tmp);

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
