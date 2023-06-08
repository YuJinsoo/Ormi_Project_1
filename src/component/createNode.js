// DOM element 생성 함수
/**
 *
 * @param {String} tag
 * @param {String, default null} id
 * @param {String} cls
 * @returns {DOMobject}
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
