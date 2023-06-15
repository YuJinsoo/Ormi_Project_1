import { createNode } from "./createNode.js";

export function startButtonGenerator() {
  const resultNode = createNode("section", "startBtnSection");

  const btnWrap = createNode("div", null, "btnWrap");

  const strBtn = createNode("button", "startBtn", "btndafault btnstyle");
  strBtn.textContent = "시작";
  btnWrap.append(strBtn);

  resultNode.append(btnWrap);

  return resultNode;
}
