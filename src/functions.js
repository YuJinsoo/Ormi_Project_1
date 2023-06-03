const count_max = 2;
let gpt_count = 0;
let user_count = 0;

// 입력한 텍스트 전달 및 응답 수신
function chatGptAPI(data) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      //console.log(res.choices[0].message.content);

      let api_content = res.choices[0].message.content;

      if (api_content.indexOf("{") === -1 || api_content.indexOf("}") === -1) {
        throw new Error(`GPT API의 응답 형식이 맞지 않습니다. ${api_content}`);
      }

      result = parseJsonAnswer(api_content);
      if (result === "") {
        return;
      }

      //document.querySelector("#contents").innerText += "\n" + result;
      appendData(data, "assistant", api_content);
      //const $gptAnswerList = document.querySelector(".gptPart");
      answerTagAdder(result, document.querySelector("#boradarea_gpt"));

      document.querySelector("#warnBtn").disabled = false;

      checkCorrectWord(result, "assistant");
      checkWarnCount();
      printGptMessage(api_content);
    })
    .catch((e) => {
      console.log(e);
      alert("새로고침 후 게임을 다시 시작해 주세요!");
    });
}

// gptAPI로 온 답변을 JSON으로 파싱하여 데이터로 저장
function parseJsonAnswer(text) {
  // \" 문자가 들어가는 경우가 있어서 제외.
  if (text.indexOf("\\") !== -1) {
    text = text.replaceAll("\\", "");
  }

  // JSON 형식은 모두 큰따옴표로 묶어줘야 함
  let tmp_text = text
    .slice(text.indexOf("{"), text.indexOf("}") + 1)
    .replaceAll("'", '"');

  console.log(tmp_text);
  let json_obj = JSON.parse(tmp_text);
  answers.gpt.push(json_obj.answer);
  return answers.gpt[answers.gpt.length - 1];
}

function sendJsonAnswer(user_input) {
  let text = `{'answer':'${user_input}'}`;
  console.log(text);
  return text;
}

function answerTagAdder(text, parentNode) {
  let obj = document.createElement("p");
  obj.classList.add("answer");
  obj.innerText = text;

  console.log(obj);
  parentNode.prepend(obj);
}

// 제시한 단어가 앞단어와 맞는지 확인
function checkCorrectWord(word, side) {
  let latest_word;
  let result;
  let last_letter;
  let first_letter;
  if (side === "user") {
    latest_word = answers.gpt.slice(-1).pop();
    console.log(latest_word);

    last_letter = latest_word.charAt(latest_word.length - 1);
    first_letter = word.slice(0, 1);
    result = last_letter !== first_letter ? false : true;
  } else if (side == "assistant") {
    if (answers.user.length === 0) {
      return;
    }
    latest_word = answers.user.slice(-1).pop();

    last_letter = latest_word.charAt(latest_word.length - 1);
    first_letter = word.slice(0, 1);
    result = last_letter !== first_letter ? false : true;
  }

  if (result === false) {
    checkWarnCount(side);
  }
}

// checkCorrectWord()의 result가 false 일때 경고 점수 카운트, 승리알림
function checkWarnCount(side) {
  if (side === "user") {
    user_count++;
  } else if (side === "assistant") {
    gpt_count++;
  }
  changeScoreTag();

  if (gpt_count >= count_max) {
    alert("user 승리!");
  }

  if (user_count >= count_max) {
    alert("user 패배!");
  }
  console.log(`gpt : ${gpt_count}, user: ${user_count}`);
}

function changeScoreTag() {
  let socre = document.querySelector("#score");
  socre.innerText = `${gpt_count} : ${user_count}`;
}

// gpt와 의 대화 data 추가하는 함수
function appendData(data, side, dialogdata) {
  let obj = { role: `${side}`, content: `${dialogdata}` };
  data.push(obj);
  return data;
}

function printGptMessage(text) {
  let mes = document.querySelector("#message");
  mes.innerText = text;
}

//로딩창...
function openLoading() {
  let maskHeight = $(document).height();
  console.log(maskHeight);
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
  $("#loadingImg").css({
    top: maskHeight,
  });

  //마스크 표시
  $("#mask").show();

  //로딩중 이미지 표시
  $("#loadingImg").show();
}

function closeLoadingWithMask() {
  $("#mask, #loadingImg").hide();
  $("#mask, #loadingImg").remove();
}
