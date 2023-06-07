//로딩창...
function openLoading() {
  let maskHeight = $(document).height();
  let maskWidth = document.maskWidth;

  const mask = document.createElement("div");
  mask.id = "mask";

  const loadingImg = document.createElement("div");
  loadingImg.id = "loadingImg";

  const imgNode = document.createElement("img");
  imgNode.src = "../asset/Hourglass.gif";
  loadingImg.append(imgNode);

  //화면에 레이어 추가
  // sweetalert2, jQuery
  $("body").append(mask).append(loadingImg);

  //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.
  // sweetalert2, jQuery
  $("#mask").css({
    width: maskWidth,
    height: maskHeight,
    opacity: "0.3",
  });

  let h = maskHeight / 2;
  // sweetalert2, jQuery
  $("#loadingImg").css({
    top: h,
  });

  //마스크 표시
  // sweetalert2, jQuery
  $("#mask").show();

  //로딩중 이미지 표시
  // sweetalert2, jQuery
  $("#loadingImg").show();
}

function closeLoading() {
  // sweetalert2, jQuery
  $("#mask, #loadingImg").hide();
  $("#mask, #loadingImg").remove();
}

export { openLoading, closeLoading };
