// header를 생성해서 Node를 반환합니다.
// 반환된 Node를 main.js에서 body에 append해주세요.
export function headerGenerator() {
  let resultNode = document.createElement("header");
  resultNode.id = "navbar";

  let tmp;
  let logo = document.createElement("a");
  logo.href = "./index.html";
  logo.id = "logolink";

  tmp = document.createElement("img");
  tmp.src = "./img/versus.png";
  tmp.id = "imglogo";
  logo.append(tmp);

  tmp = document.createElement("div");
  tmp.classList.add("titlelogo");
  tmp.innerText = "VERSUS GPT";
  logo.append(tmp);

  let language = document.createElement("div");
  language.id = "language";

  tmp = document.createElement("p");
  tmp.classList.add("titlelogo");
  tmp.textContent = "Language:";
  language.append(tmp);

  tmp = document.createElement("select");
  tmp.id = "langselect";
  let tmp2 = document.createElement("option");
  tmp2.innerText = "한국어(Korean)";
  tmp.append(tmp2);
  tmp2 = document.createElement("option");
  tmp2.innerText = "영어(English)";
  tmp.append(tmp2);
  language.append(tmp);

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
