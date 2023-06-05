// header를 생성해서 Node를 반환합니다.
// 반환된 Node를 main.js에서 body에 append해주세요.

export function footerGenerator() {
  let resultNode = document.createElement("footer");
  resultNode.id = "footer";

  let tmp;
  tmp = document.createElement("div");
  tmp.classList.add("footercontent");
  tmp.innerText = "끝말잇기 게임을 즐겨주셔서 감사합니다.";
  resultNode.append(tmp);
  tmp = document.createElement("div");
  tmp.classList.add("footercontent");
  tmp.innerText = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
  resultNode.append(tmp);
  tmp = document.createElement("div");
  tmp.classList.add("footercontent");
  tmp.innerText =
    "github repository : https://github.com/YuJinsoo/Ormi_Project_1";
  resultNode.append(tmp);

  return resultNode;
}

/* 
<footer id="footer">
    <div class="footercontent">끝말잇기 게임을 즐겨주셔서 감사합니다.</div>
    <div class="footercontent">
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    </div>
    <div class="footercontent">github repository : https://github.com/YuJinsoo/Ormi_Project_1</div>
</footer> 
*/
