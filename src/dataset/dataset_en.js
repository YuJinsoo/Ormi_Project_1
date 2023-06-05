export function resetDataEn(data) {
  data = [
    { role: "system", content: "assistant is a good gamer." },
    {
      role: "user",
      content:
        "I want to play a 1:1 game with you. Can you play the game if I explain the rules?",
    },
  ];
  return data;
}
