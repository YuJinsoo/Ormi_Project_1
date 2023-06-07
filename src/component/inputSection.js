// infoSection을 생성해서 Node를 반환합니다.
// 반환된 Node를 main.js에서 body에 append해주세요.
export function inputSectionGenerator() {
  let resultNode = document.createElement("section");
  resultNode.id = "infoSection";

  // id userInput 생성
  let inputs = document.createElement("div");
  inputs.id = "userInput";

  // 시작, 새로고침, 경고 버튼 area
  let buttons = document.createElement("div");
  buttons.id = "buttonArea";

  // 시작버튼
  let strBtn = document.createElement("button");
  strBtn.id = "startBtn";
  strBtn.classList.add("btndafault", "btnstyle");
  strBtn.textContent = "시작";
  buttons.append(strBtn);

  // 새로고침 버튼
  let reBtn = document.createElement("button");
  reBtn.id = "regameBtn";
  reBtn.classList.add("btndafault", "btnstyle");

  let reImg = document.createElement("img");
  reImg.src = "./asset/refresh.png";
  reBtn.append(reImg);
  buttons.append(reBtn);

  //경고버튼
  let warBtn = document.createElement("button");
  warBtn.id = "warnBtn";
  warBtn.classList.add("btndafault", "btnstyle");
  warBtn.disabled = "true";
  warBtn.innerText = "gpt에게경고!";
  buttons.append(warBtn);
  inputs.append(buttons);

  // form 생성. form 안쓰면 엔터키 처리를 keydown 이벤트로 처리해야함
  let formbox = document.createElement("form");
  formbox.type = "text";
  formbox.autofocus = true;

  // input 생성
  let inText = document.createElement("input");
  inText.type = "text";
  inText.placeholder = "단어를 입력해주세요";
  formbox.append(inText);

  //전송버튼
  let sendBtn = document.createElement("button");
  sendBtn.id = "answerBtn";
  sendBtn.classList.add("btndafault", "btnstyle");
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
