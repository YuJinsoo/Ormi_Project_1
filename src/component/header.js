import { createNode } from "./createNode.js";
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

  let language = createNode("div", "language");

  let langText = createNode("p", null, "titlelogo");
  langText.textContent = "Language:";
  language.append(langText);

  let langSelbox = createNode("select", "langselect");

  let optKo = createNode("option");
  optKo.innerText = "한국어(Korean)";
  langSelbox.append(optKo);

  let optEn = createNode("option");
  optEn.innerText = "영어(English)";
  langSelbox.append(optEn);
  language.append(langSelbox);

  resultNode.append(logo);
  resultNode.append(language);

  return resultNode;
}

/* 
<header id="navbar">
    <a href="./index.html" id="logolink">
        <img id="imglogo" src="./asset/versus.png" />
        <div class="titlelogo">VERSUS GPT</div>
    </a>
    <div id="language">
        <p class="titlelogo">Language:</p>
        <select id="langselect">
            <option>한국어(Korean)</option>
            <option>영어(English)</option>
        </select>
    </div>
</header> 
*/
