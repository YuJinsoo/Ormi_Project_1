//

const url = "https://stdict.korean.go.kr/api/search.do";
const testurl =
  "https://stdict.korean.go.kr/api/search.do?certkey_no=5495&key=DFCABB03AB1D381AE4FF292B620877EE&type_search=search&req_type=json&q=%EB%82%98%EB%AC%B4";
export function koWordAPI(word) {
  let search = `${url}?key=DFCABB03AB1D381AE4FF292B620877EE&type_search=search&q=${word}`;
  fetch(search, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },

    redirect: "follow",
  }).then((res) => console.log(res));
}

// body: JSON.stringify({
//     key: "DFCABB03AB1D381AE4FF292B620877EE",
//     q: word,
//     req_type: "json",
//     advanced: "y",
//     method: "exact",
//     type1: "word",
//     pos: [1, 2],
//   }),
