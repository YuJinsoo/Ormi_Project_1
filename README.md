# Ormi_Project_1

- gpt 3.5 api로 끝말잇기 규칙을 학습시켜서 1:1끝말잇기 놀이를 하는 사이트입니다.
- '시작'버튼을 누르면 gpt가 임의의 단어를 생성해서 보여주면 게임이 시작합니다.

## 단어 주고받는 방식

- gpt에 학습시켜서 아래 형식의 JSON 데이터로 단어를 주고받습니다.
- 전송한 string에서 JSON오브젝트를 파싱하여 단어를 추출합니다.

```json
{
  "answer": "단어"
}
```

## 이슈

### ~2023.06.01

- 학습을 많이 시켜도 항상 원하는 답을 하지는 않았습니다. 일반적으로 진행 가능한 수준으로 학습시킨 뒤, 예외사항을 처리하거나 추가 기능을 개발하는 것이 효과적이라고 판단했습니다.

### ~2023.06.02

1. gpt 스스로 판단해서 JSON오브젝트를 보내지 않는 경우가 있습니다. 이런 case를 처리하는 기능 개발이 추가로 필요합니다. 이런 경우 보여주는 화면에 빈칸 혹은 '-'표시를 하고 게임을 계속 진행할 지 새로운 게임을 시작하게 하는 것이 좋을지 고민중입니다.
2. gpt가 말하는 단어중 없는 단어가 있습니다. 일단은 유저가 gpt에게 경고 count를 올릴 수 있는 버튼으로 해결하였습니다. 최종적으로 크롤러를 개발해서 사전에서 유효성을 검색하는 기능을 추가하고 싶은데 다른 기능을 모두 완료한 후에 붙이는 식으로 해야 된다고 판단했습니다.

## 추가 개발 계획

- ~~gpt API의 응답 기다리는 동안 로딩 화면 개발~~ 개발완료
- ~~document의 노드를 javascript로 모듈화~~ 개발완료
- ~~영어 모드~~ 개발 완료
- ~~javascript 파일 모듈화~~ 개발완료
- 사전 크롤러 (selenium 사용해보려고 함)
- ~~alert 창 꾸미기~~ 개발완료 > sweetAlert2

## 프로젝트 코드리뷰

### 보이는부분

1. ~~왼쪽 로고는 왼쪽으로 좀 더 마진을 주는 것이 좋을 것 같아요.~~ (완료)
2. ~~이미지는 지금 위 아래로 짜부되었습니다.ㅎㅎ 짜부되지 않도록 이미지를 잘라주시던가 width 기준으로만 맞춰지도록 해주세요.~~ (완료)
3. ~~왼쪽 슬라이드, 오른쪽 슬라이드 화살표에 뒤에 백그라운드는 흰색을 빼주시면 좀 더 예쁘게 들어갈 것 같아요.~~ (완료)
4. ~~리프레쉬를 누르면 페이지가 깜빡이는데 깜빡이지 않게 할 수 있을 것 같습니다.~~ (완료)
5. ~~경고 횟수판? 보다는 'GPT가 받은 경고'로 해주는 것이 맞지 않을까요?~~ (완료)

6. ~~단어를 입력해주세요는 왼쪽 여백이 필요해보이고요.~~ (완료)
7. ~~언어 선택도 오른쪽 여백이 좀 더 필요해보이네요.~~ (완료)
8. ~~그리고 GPT ANSWER와 아래 응답되는 텍스트 정렬이 맞지 않습니다.~~ (대략 완료)
9. ~~끝말 잇기이니 마지막 글자에 굵은 글씨를 표현해줘도 좋을 것 같습니다.~~ (완료)
10. footer 아래 흰 줄이 하나 더 있는데 흰줄이 없게 만들어주세요. >> 제 화면에서는 안보이는데.. 확인할 방법이 있을지 문의하기

### 코드부분

1. ~~문서 내 h1은 필수로 삽입이 됩니다. 서비스 명으로요. 만약 쓰실 생각이 없으시면 section위에 h1을 놓으시고 서비스 명 쓰신다음에 css로 안보이게 넣으시는 것을 권해드립니다.~~ (완료)
2. ~~함수 내부의 변수들은 const로 사용하셔도 됩니다.~~ (완료)
3. ~~console.log로 이곳저곳 많이 찍으셨던데 나중에는 지워주세요. 🙂 주석처리 말고 지워주시는 편이 깔끔합니다. 🙂 어차피 github 히스토리에 남아있으니까요.~~ (완료)
4. ~~외부코드 표기(jquery, sweetalert 사용부분에 라이브러리 사용 여부 주석달아주기)~~ (완료)
5. ~~DOM으로 노드 생성 시 변수명을 좀 더 신경써주시면 좋을 것 같아요.~~ (완료)
