//

const url = "https://stdict.korean.go.kr/api/search.do";

export function koWordAPI(word) {
  fetch(url, {
    method: "GET",
    certkey_no: 5518,
    key: "5506921242C21452811AFA56D1F94A04",
    q: `${word}`,
    encoding: "utf-8",
    // type_search: "search",
    // req_type: "json",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },

    redirect: "follow",
  })
    //   .then((res) => res.json());
    .then((res) => console.log(res));
}
