import { createNode } from "./createNode.js";

/**
 * header를 생성해서 Node를 반환합니다.
 * 반환된 Node를 main.js에서 body에 append해주세요.
 */
export function inputSectionGenerator() {
  let resultNode = createNode("section", "infoSection");

  // id userInput 생성
  let inputs = createNode("div", "userInput");

  // 시작, 새로고침, 경고 버튼 area
  let buttons = createNode("div", "buttonArea");

  // 새로고침 버튼
  let reBtn = createNode("button", "regameBtn", "btndafault btnstyle");
  let reImg = createNode("img");
  reImg.src = "./asset/refresh.png";
  reBtn.append(reImg);
  buttons.append(reBtn);

  //경고버튼
  let warBtn = createNode("button", "warnBtn", "btndafault btnstyle");
  warBtn.disabled = "true";
  warBtn.innerText = "gpt에게경고!";
  buttons.append(warBtn);
  inputs.append(buttons);

  // form 생성. form 안쓰면 엔터키 처리를 keydown 이벤트로 처리해야함
  let formbox = createNode("form");
  formbox.type = "text";
  formbox.autofocus = true;

  // input 생성
  let inText = createNode("input", "answerText");
  inText.type = "text";
  inText.placeholder = "단어를 입력해주세요";
  formbox.append(inText);

  //전송버튼
  let sendBtn = createNode("button", "answerBtn", "btndafault btnstyle");
  sendBtn.disabled = "true";
  sendBtn.innerText = "답장 send";
  formbox.append(sendBtn);
  inputs.append(formbox);

  resultNode.append(inputs);

  return resultNode;
}

/* 
<section id="infoSection">
    <h2>GPT와 겨루는 끝말잇기 한판!</h2>
    <div>
        게임 규칙:<br />
        1. 실패 카운트가 2이 되는 순간 패배합니다.<br />
        2. gpt가 적합한 단어를 말하지 않았다면, 'gpt에게 경고!' 버튼을 누르고
        상대가 말한 단어에 이어서 단어를 말하세요.<br />
        3. gpt API의 응답에 따라 게임을 다시 시작해야 할 수 있습니다.
    </div>
    <div id="buttonArea">
        <button id="startBtn">시작</button>
        <button id="warnBtn" disabled="true">gpt에게경고!</button>
    </div>
    <div id="userInput">
      <form type="post">
        <input type="text" autofocus />
        <button id="answerBtn" disabled="true">답장 보내기</button>
      </form>
    </div>
</section> 
    */
