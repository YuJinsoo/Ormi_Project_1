// 스크린 인덱스 버튼 이벤트
document.querySelector("#btn2").addEventListener("click", function (e) {
  document.querySelector(".container").style.transform = "translate(-100vw)";
  e.target.classList.add(".currentscreenbtn");
});
document.querySelector("#btn3").addEventListener("click", function (e) {
  document.querySelector(".container").style.transform = "translate(-200vw)";
});
document.querySelector("#btn1").addEventListener("click", function (e) {
  document.querySelector(".container").style.transform = "translate(-0vw)";
});

// 다음버튼 이전버튼
const $left = document.querySelector(".left");
const $right = document.querySelector(".right");
const $slide = document.querySelector(".container");
let rotate_max = document.querySelectorAll(".btnDot").length - 1;
let pos = 0;

$left.addEventListener("click", function () {
  if (pos === 0) {
    pos = rotate_max;
    $slide.style.transform = `translate(-${pos * 100}vw)`;
  } else {
    pos -= 1;
    $slide.style.transform = `translate(-${pos * 100}vw)`;
  }
});

$right.addEventListener("click", function () {
  if (pos === rotate_max) {
    pos = 0;
    $slide.style.transform = `translate(-${pos * 100}vw)`;
  } else {
    pos += 1;
    $slide.style.transform = `translate(-${pos * 100}vw)`;
  }
});
