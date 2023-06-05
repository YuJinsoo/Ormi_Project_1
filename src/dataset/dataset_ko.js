function resetData(data) {
  data = [
    {
      role: "system",
      content: "assistant is a good gamer.",
    },
    {
      role: "user",
      content:
        "나는 1:1 끝말잇기를 너랑 하고싶은데 내가 규칙을 알려주면 학습할 수 있니?",
    },
    {
      role: "assistant",
      content:
        "네, 전체 규칙과 함께 플레이 방법을 알려주세요. 그러면 제가 기억하고 협력할 수 있습니다.",
    },
    {
      role: "user",
      content:
        "끝말잇기 규칙은 다음과의 7가지 입니다. 1. 상대방이 말한 단어의 마지막 글자로 시작하는 단어를 말합니다. 2. 중복된 단어(이미 말한 단어)는 사용할 수 없습니다. 3. 정확한 철자와 뜻을 가진 단어를 사용해야 합니다. 4. 한 글자 단어는 사용할 수 없습니다. 5. 문장으로 대답하면 안됩니다. 6. 우리가 끝말잇기에 사용할 언어는 한국어 입니다. 7. 한 번에 하나의 단어만 말할 수 있습니다. 8. 단어를 말할 때에는 JSON의 object 형식으로 보내야 합니다. JSON object의 'answer' 키에 단어를 담아서 주고받습니다. 규칙을 이해했습니까?",
    },
    {
      role: "assistant",
      content:
        "네, 이제 끝말잇기 규칙을 이해했습니다. '먹방'으로 시작합니다.{ 'answer': '방학' }",
    },
    {
      role: "user",
      content: "{'answer':'학교'}",
    },
    {
      role: "assistant",
      content: "{'answer':'교실'}",
    },
    {
      role: "user",
      content: "{'answer':'실습'}",
    },
    {
      role: "assistant",
      content: "{'answer':'습도'}",
    },
    {
      role: "user",
      content: "{'answer':'도망'}",
    },
    {
      role: "assistant",
      content: "{'answer': '원숭이'}",
    },
    {
      role: "user",
      content:
        "당신은 '도망'에 대해 대답을 해야 하는데 '원숭이'는 '망'으로 시작하는 단어가 아닙니다. '망'으로 시작하는 다른 단어를 말해주세요",
    },
    {
      role: "assistant",
      content: "{'answer': '망고'}",
    },
    {
      role: "user",
      content: "{'answer':'고과'}",
    },
    {
      role: "assistant",
      content: "{'answer':'과자'}",
    },
    {
      role: "user",
      content: "{'answer':'자본'}",
    },
    {
      role: "assistant",
      content: "{'answer':'본사'}",
    },
    {
      role: "user",
      content: "{'answer':'사탕발림'}",
    },
    {
      role: "assistant",
      content: "'s'로 시작하는 단어를 사용해주세요!",
    },
    {
      role: "user",
      content:
        "당신은 틀렸습니다. 제가 말한 단어에는 's'가 포함되지 않았습니다. 당신은 당신이 말한 단어의 유효성만 확인하고, 제가 말한 단어가 유효한지 확인하지 마십시오. 제가 앞에서 말한 규칙을 다시 한 번 확인할 필요가 있겠습니다. 당신은 JSON의 object 형식으로 다음 단어를 말해주세요. 이전까지의 끝말잇기는 끝내고 새롭게 끝말잇기를 시작합니다. 새로 시작할 단어를 앞에서 말한 JSON object 형식에 맞게 제시해 주세요.",
    },
    {
      role: "assistant",
      content: "{'answer':'핑크'}",
    },
    {
      role: "user",
      content: "{'answer':'크림파스타'}",
    },
    {
      role: "assistant",
      content: "'s'로 시작하는 단어를 사용해주세요!",
    },
    {
      role: "user",
      content:
        "당신은 또 틀렸습니다. 제가 말한 단어에는 's'가 포함되지 않았습니다. 제가 앞에서 말한 규칙을 다시 한 번 확인할 필요가 있겠습니다. 이전까지의 끝말잇기는 끝내고 새롭게 끝말잇기를 시작합니다. 새로 시작할 단어를 앞에서 말한 JSON object 형식에 맞게 제시해 주세요.",
    },
  ];

  return data;
}
