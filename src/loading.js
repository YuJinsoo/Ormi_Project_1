//로딩창...
function openLoading() {
  let maskHeight = $(document).height();
  let maskWidth = document.maskWidth;

  let mask = document.createElement("div");
  mask.id = "mask";

  let loadingImg = document.createElement("div");
  loadingImg.id = "loadingImg";

  let tmp = document.createElement("img");
  tmp.src = "../img/Hourglass.gif";
  loadingImg.append(tmp);

  //화면에 레이어 추가
  $("body").append(mask).append(loadingImg);

  //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.
  $("#mask").css({
    width: maskWidth,
    height: maskHeight,
    opacity: "0.3",
  });

  let h = maskHeight / 2;
  //console.log(h);
  $("#loadingImg").css({
    top: h,
  });

  //마스크 표시
  $("#mask").show();

  //로딩중 이미지 표시
  $("#loadingImg").show();
}

function closeLoading() {
  $("#mask, #loadingImg").hide();
  $("#mask, #loadingImg").remove();
}

export { openLoading, closeLoading };
