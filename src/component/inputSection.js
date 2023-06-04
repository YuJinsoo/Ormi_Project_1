// infoSection을 생성해서 Node를 반환합니다.
// 반환된 Node를 main.js에서 body에 append해주세요.
export function inputSectionGenerator() {
  let resultNode = document.createElement("section");
  resultNode.id = "infoSection";

  let tmp;
  /*
  tmp = document.createElement("h2");
  tmp.innerText = "GPT와 겨루는 끝말잇기 한판!";
  resultNode.append(tmp);

  tmp = document.createElement("div");
  tmp.innerHTML =
    "게임 규칙:<br /> 1. 실패 카운트가 2이 되는 순간 패배합니다.<br /> 2. gpt가 적합한 단어를 말하지 않았다면, 'gpt에게 경고!' 버튼을 눌러주세요.<br /> 3. 상대가 말한 단어에 이어서 단어를 말하세요.<br /> 4. gpt API의 응답에 따라 게임을 다시 시작해야 할 수 있습니다.";
  resultNode.append(tmp);
  */

  // id buttonArea 생성
  /*
  let buttons = document.createElement("div");
  buttons.id = "buttonArea";

  tmp = document.createElement("button");
  tmp.id = "startBtn";
  tmp.innerText = "시작";
  buttons.append(tmp);

  tmp = document.createElement("button");
  tmp.id = "warnBtn";
  tmp.disabled = "true";
  tmp.innerText = "gpt에게경고!";
  buttons.append(tmp);
*/

  // id userInput 생성
  let inputs = document.createElement("div");
  inputs.id = "userInput";

  tmp = document.createElement("button");
  tmp.id = "startBtn";
  tmp.classList.add("btndafault", "btnstyle");
  tmp.innerText = "시작";
  inputs.append(tmp);

  tmp = document.createElement("input");
  tmp.type = "text";
  inputs.append(tmp);

  tmp = document.createElement("button");
  tmp.id = "answerBtn";
  tmp.classList.add("btndafault", "btnstyle");
  tmp.disabled = "true";
  tmp.innerText = "답장 보내기";
  inputs.append(tmp);

  tmp = document.createElement("button");
  tmp.id = "warnBtn";
  tmp.classList.add("btndafault", "btnstyle");
  tmp.disabled = "true";
  tmp.innerText = "gpt에게경고!";
  inputs.append(tmp);
  //resultNode.append(buttons);
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
