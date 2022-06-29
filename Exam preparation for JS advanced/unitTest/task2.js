function solve(power, suit) {
  const cardPower = ['2', '3', '4', '5', '6', '7', '8', '9', '10', "J", "Q", "K", "A"];


  const cardSuit = {
    'S': "\u2660",
    'H': "\u2665",
    'D': "\u2666",
    'C': "\u2663",
  };

  if(!cardPower.includes(power)) {
      throw new Error('Invalid power')
  } 

  if(!cardSuit.hasOwnProperty(suit)) {
      throw new Error('Invalid suit')
  }

  return {
      power,
      suit,
      toString() {
          return `${power}${cardSuit[suit]}`;
      }
  }

}

let card1 = solve('10', 'H');
console.log(card1.toString());