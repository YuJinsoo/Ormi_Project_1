/**
 *
 * @param {Array} data 영어 학습 데이터를 받아올 Array
 * @returns {Array} 설정된 영어 학습 데이터
 */
export function resetDataEn(data) {
  data = [
    { role: "system", content: "assistant is a good gamer." },
    {
      role: "user",
      content:
        "I want to play 1:1 ending with you. Can you learn if I tell you the rules?",
    },
    {
      role: "assistant",
      content: "Of course! Please explain the rules of the game.",
    },
    {
      role: "user",
      content:
        "There are 7 rules of 'Word Chain' as follows. 1. Say a word that starts with the last letter of the other person's word. 2. Duplicate words (words already spoken) cannot be used. 3. Use words with correct spelling and meaning. 4. Single-letter words cannot be used. 5. You must not answer in sentences. 6. The language we will use for the ending is English. 7. You can only say one word at a time. 8. When speaking words, they must be sent in JSON object format. Send and receive words in the 'answer' key of the JSON object. Did you understand the rules?",
    },
    {
      role: "assistant",
      content:
        "Yes, I understand the rules of 'Word Chain'. The rules state that each player must say a word that starts with the last letter of the other person's word, duplicate words cannot be used, correct spelling and meaning should be used, single-letter words are not allowed, and responses should not be in sentences. The language used must be English and only one word can be said at a time. Additionally, words must be sent in JSON object format, with the word being sent in the 'answer' key of the JSON object.",
    },
    {
      role: "user",
      content:
        "If you understand the rules, let's start the 'word chain' game. Say the word you start the game with.",
    },
    {
      role: "assistant",
      content:
        'Sure, I will start with the word "apple" in the "answer" key of a JSON object. Here it is: { "answer": "apple" }',
    },
    {
      role: "user",
      content: "{'answer':'eagle'}",
    },
    {
      role: "assistant",
      content: "{'answer':'elepahant'}",
    },
    {
      role: "user",
      content:
        "I want to restart the 'word chain' game with another word. Suggest the word that started the game.",
    },
  ];
  return data;
}
