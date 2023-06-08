// DOM element 생성 함수
/**
 *
 * @param {String} tag
 * @param {String} id default null
 * @param {String} cls defualt null. 여러 클래스를 공백으로 구분하여 추가할 수 있습니다.
 * @returns {DOM object}
 */
export function createNode(tag, id = null, cls = null) {
  const result = document.createElement(tag);

  if (id !== null) {
    result.id = id;
  }

  if (cls !== null) {
    if (cls.indexOf(" ") === -1) {
      result.classList.add(cls);
    } else {
      const array = cls.split(" ");
      for (let n of array) {
        result.classList.add(n);
      }
    }
  }

  return result;
}
