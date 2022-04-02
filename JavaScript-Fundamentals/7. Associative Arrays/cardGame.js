function solve(array) {
  let players = {};

  let colors = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  let type = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  array.map((player) => {
    let [name, cards] = player.split(": ");
    let newCards = cards.split(", ");

    if (!players.hasOwnProperty(name)) {
      players[name] = [];
    }
    players[name].push(...newCards);
  });

  Object.keys(players).forEach(key => {
    let cardsArr = new Set(players[key]);
    let total = 0;

    Array.from(cardsArr).forEach(card => {
      let element = card.split('');
      let color = element.pop();
      let cardNum = element.join('');

      if(isNaN(cardNum)) {
        cardNum = type[cardNum];
      }

      total += colors[color] * Number(cardNum);
    })
    players[key] = total;
  })

 Object.keys(players).forEach(key => {
   console.log(`${key}: ${players[key]}`)
 })


}
solve([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
