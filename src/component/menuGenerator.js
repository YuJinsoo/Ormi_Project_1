import { createNode } from "./createNode.js";

export function menuGenerator() {
  let resultNode = createNode("div", "menuMain");

  let list = createNode("ul");
  let m1 = createNode("li");
  let a1 = createNode("a");
  a1.href = "./index.html";
  a1.innerText = "home";

  m1.append(a1);
  list.append(m1);

  //   let m2 = createNode("li");
  //   let a2 = createNode("a");
  //   a2.href = "";
  //   a2.innerText = "project";

  //   m2.append(a2);
  //   list.append(m2);

  //   let m3 = createNode("li");
  //   let a3 = createNode("a");
  //   a3.href = "";
  //   a3.innerText = "mode";

  //   m3.append(a3);
  //   list.append(m3);

  let m4 = createNode("li");
  let a4 = createNode("a");
  a4.href = "https://github.com/YuJinsoo/Ormi_Project_1";
  a4.target = "_blank";
  a4.innerText = "github repo";

  m4.append(a4);
  list.append(m4);

  resultNode.append(list);
  return resultNode;
}
