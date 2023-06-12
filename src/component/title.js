import { createNode } from "./createNode.js";

export function titleGenerator() {
  let resultNode = createNode("div");

  let h1 = createNode("h1");
  h1.innerText = "GPT와 끝말잇기 대결!";
  resultNode.append(h1);

  let explanation = createNode("div", "explanation");
  explanation.innerText =
    '게임을 시작하려면 "시작" 버튼을 클릭해주세요.\n 단어 표시판의 화살표를 눌러보세요.\n게임을 다시 시작하시려면 새로고침 버튼을 눌러주세요.\n자세한 설명은 아래 슬라이더를 참고해주세요.';
  resultNode.append(explanation);

  return resultNode;
}
