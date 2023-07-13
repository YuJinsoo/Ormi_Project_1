import { createNode } from "./createNode.js";
import { menuGenerator } from "./menuGenerator.js";
/**
 * header를 생성해서 Node를 반환합니다.
 * 반환된 Node를 main.js에서 body에 append해주세요.
 */
export function headerGenerator() {
  let resultNode = createNode("header", "navbar");

  let logo = createNode("a", "logolink");
  logo.href = "./index.html";

  let logoImg = createNode("img", "imglogo");
  logoImg.src = "./asset/versus.png";
  logo.append(logoImg);

  let logoTitle = createNode("div", null, "titlelogo");
  logoTitle.innerText = "VERSUS GPT";
  logo.append(logoTitle);

//   let language = createNode("div", "language");

//   let langText = createNode("p", null, "titlelogo");
//   langText.textContent = "Language:";
//   language.append(langText);

//   //
//   let langSelbox = createNode("select", "langselect");

//   let optKo = createNode("option");
//   optKo.innerText = "Korean";
//   langSelbox.append(optKo);

//   let optEn = createNode("option");
//   optEn.innerText = "English";
//   langSelbox.append(optEn);
//   language.append(langSelbox);

  resultNode.append(logo);
//   resultNode.append(language);

  // menu label 버튼
//   let menu = createNode("label", "menu");
//   let menuImg = createNode("img");
//   menuImg.src = "./asset/menu.svg";
//   menu.append(menuImg);
//   let menuInput = createNode("input", "menucheck");
//   menuInput.type = "checkbox";
//   menu.append(menuInput);
//   menu.for = "menucheck";
//   resultNode.append(menu);

//   let menuwindow = menuGenerator();
//   resultNode.append(menuwindow);


  // 반응형 헤더 메뉴
  let menulist = createNode("ul", "navbar_menu");

  let li_1 = createNode("li", null, "menu_style")
  let a1 = createNode("a");
  a1.href = "./index.html";
  a1.innerText = "Home";
  li_1.append(a1);
  menulist.append(li_1);

  let li_2 = createNode("li", null, "menu_style")
  li_2.innerText = "Language"
  let selbox = createNode("select", "langselect");
  let opt_ko = createNode("option");
  opt_ko.innerText = "Korean";
  selbox.append(opt_ko);

  let opt_en = createNode("option");
  opt_en.innerText = "English";
  selbox.append(opt_en);
  li_2.append(selbox);
  menulist.append(li_2);

  let li_3 = createNode("li", null, "menu_style")
  let b1 = createNode("button", "modeLabel");
  b1.innerText = "Mode";
  let modeinput = createNode("input", "modeCheck");
  modeinput.type = "checkbox";
  b1.for = "modeCheck";
  li_3.append(b1, modeinput);
  menulist.append(li_3);

  let li_4 = createNode("li", null, "menu_style")
  let a2 = createNode("a");
  a2.href = "https://github.com/YuJinsoo/Ormi_Project_1";
  a2.target = "_blank";
  a2.innerText = "Github Repo";
  li_4.append(a2);
  menulist.append(li_4);
  
  resultNode.append(menulist);

  return resultNode;
}
