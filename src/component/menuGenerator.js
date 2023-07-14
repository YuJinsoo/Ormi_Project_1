import { createNode } from "./createNode.js";

export function menuGenerator() {
  let resultNode = createNode("ul", "navbar_menu");

  let li_1 = createNode("li", null, "menu_style")
  let a1 = createNode("a");
  a1.href = "./index.html";
  a1.innerText = "Home";
  li_1.append(a1);
  resultNode.append(li_1);

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
  resultNode.append(li_2);

  let li_3 = createNode("li", null, "menu_style")
  let b1 = createNode("button", "modeButton");
  b1.innerText = "Mode";
  let modeinput = createNode("input", "modeCheck");
  modeinput.type = "checkbox";
  b1.for = "modeCheck";
  li_3.append(b1, modeinput);
  resultNode.append(li_3);

  let li_4 = createNode("li", null, "menu_style")
  let a2 = createNode("a");
  a2.href = "https://github.com/YuJinsoo/Ormi_Project_1";
  a2.target = "_blank";
  a2.innerText = "Github Repo";
  li_4.append(a2);
  resultNode.append(li_4);

  return resultNode;
}
