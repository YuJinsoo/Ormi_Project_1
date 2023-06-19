// 우리말샘
// const url = "https://opendict.korean.go.kr/api/search.do";
// 9C456E3230CF8EEDD35795366C39BDAB

//공공 데이터
// 한국어기초사전
// const url = "https://krdict.korean.go.kr/api/search";
// 85CF6FCA9E546073A274DEA04198DA83

// 국립국어원 표준국어대사전
const url = "https://stdict.korean.go.kr/api/search.do";
// key: 5506921242C21452811AFA56D1F94A04

// CORS 회피해주는 프록시 생성해주는 서비스 url
const proxy = "https://proxy.cors.sh";

export function koWordAPI(word) {
  let key = "5506921242C21452811AFA56D1F94A04";
  // 단어검색, json형식, 일치단어, 명사/대명사 찾기
  let search = `${proxy}/${url}?key=${key}&type_search=search&req_type=json&advanced=y&method=exact&pos=1,2&q=${word}`;
  fetch(search, {
    method: "GET",
    headers: {
      "x-cors-api-key": "temp_3931d496a1be08c7aeb02dc89a05f0eb",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // 검색된 단어가 없으면 data === {}
      if (Object.keys(data).length === 0) {
        console.log("단어없음!");
        return false;
      }
      console.log(data.channel.total);
      console.log(data.channel.item);
      console.log(data.channel.item[0].pos);
      console.log(data.channel.item[0].sense.definition);

      return true;
    });
}

// 공기질 api로 open api test
const testurl =
  "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth";
export function testAPI() {
  let sKey =
    "nTrgrE%2BAxnbHe7oW%2FdEtWVL5fLreO7SifHPFIsAxFiNYL1IltX2HS2Pj%2Bq2%2B4QmJUFHfYE9qeIhs5dXORhVSNQ%3D%3D";
  let surl = `${testurl}?serviceKey=${sKey}&returnType=json&numOfRows=100&pageNo=1&stationName=종로구&dataTerm=20200618`;
  fetch(surl, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.response.body.items);
    });
}
