import { createNode } from "./createNode.js";

export function menuGenerator() {
  let resultNode = createNode("div", "menuMain");

  let list = createNode("ul");
  let m1 = createNode("li");
  let a1 = createNode("a");
  a1.href = "#";
  a1.innerText = "test1";

  m1.append(a1);
  list.append(m1);

  let m2 = createNode("li");
  let a2 = createNode("a");
  a2.href = "#";
  a2.innerText = "test2";

  m2.append(a2);
  list.append(m2);

  let m3 = createNode("li");
  let a3 = createNode("a");
  a3.href = "#";
  a3.innerText = "test3";

  m3.append(a3);
  list.append(m3);

  let m4 = createNode("li");
  let a4 = createNode("a");
  a4.href = "#";
  a4.innerText = "test4";

  m4.append(a4);
  list.append(m4);

  resultNode.append(list);
  return resultNode;
}
