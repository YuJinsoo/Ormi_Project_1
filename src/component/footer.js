import { createNode } from "./createNode.js";

/**
 * header를 생성해서 Node를 반환합니다.
 * 반환된 Node를 main.js에서 body에 append해주세요.
 */
export function footerGenerator() {
  let resultNode = createNode("footer", "footer");

  let content = createNode("div", null, "footercontent");
  content.innerText = "끝말잇기 게임을 즐겨주셔서 감사합니다.";
  resultNode.append(content);

  content = createNode("div", null, "footercontent");
  content.innerText = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
  resultNode.append(content);

  content = createNode("div", null, "footercontent");
  content.innerText =
    "github repository : https://github.com/YuJinsoo/Ormi_Project_1";
  resultNode.append(content);

  return resultNode;
}

/* 
<footer id="footer">
    <div class="footercontent">끝말잇기 게임을 즐겨주셔서 감사합니다.</div>
    <div class="footercontent">
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    </div>
    <div class="footercontent">github repository : https://github.com/YuJinsoo/Ormi_Project_1</div>
</footer> 
*/
