// header를 생성해서 Node를 반환합니다.
// 반환된 Node를 main.js에서 body에 append해주세요.
export function headerGenerator() {
  let resultNode = document.createElement("header");
  resultNode.id = "navbar";

  let logo = document.createElement("a");
  logo.href = "./index.html";
  logo.id = "logolink";

  let logoImg = document.createElement("img");
  logoImg.src = "./img/versus.png";
  logoImg.id = "imglogo";
  logo.append(logoImg);

  let logoTitle = document.createElement("div");
  logoTitle.classList.add("titlelogo");
  logoTitle.innerText = "VERSUS GPT";
  logo.append(logoTitle);

  let language = document.createElement("div");
  language.id = "language";

  let langText = document.createElement("p");
  langText.classList.add("titlelogo");
  langText.textContent = "Language:";
  language.append(langText);

  let langSelbox = document.createElement("select");
  langSelbox.id = "langselect";

  let optKo = document.createElement("option");
  optKo.innerText = "한국어(Korean)";
  langSelbox.append(optKo);

  let optEn = document.createElement("option");
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
        <img id="imglogo" src="./img/versus.png" />
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
