import { createNode } from "./createNode.js";
import { menuGenerator } from "./menuGenerator.js";
/**
 * header를 생성해서 Node를 반환합니다.
 * 반환된 Node를 main.js에서 body에 append해주세요.
 */
export function headerGenerator() {
  let resultNode = createNode("header", "navbar");

  let head = createNode("div", "head");
  let logoDiv = createNode("div", "logodiv");

  let logo = createNode("a", "logolink");
  logo.href = "./index.html";

  let logoImg = createNode("img", "imglogo");
  logoImg.src = "./asset/versus.png";
  logo.append(logoImg);

  let logoTitle = createNode("div", null, "titlelogo");
  logoTitle.innerText = "VERSUS GPT";
  logo.append(logoTitle);
  logoDiv.append(logo);

  head.append(logoDiv);

  let toggleDiv = createNode("div", "togglediv");

  let toggleMenu = createNode("a", "toggleMenu");
  toggleMenu.href = "#"
  let menulogo = createNode("img", "logomenu");
  menulogo.src = "./asset/menu.svg";
  toggleMenu.append(menulogo);
  toggleDiv.append(toggleMenu)

  head.append(toggleDiv);
  resultNode.append(head);


  // 반응형 헤더 메뉴 생성
  let menulist = menuGenerator();
  resultNode.append(menulist);

  return resultNode;
}
