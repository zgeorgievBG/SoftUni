function solve(cardsArray) {
    const cardPower = ['2', '3', '4', '5', '6', '7', '8', '9', '10', "J", "Q", "K", "A"];
    const result = []
    let isValid = true;
  
  
    const cardSuit = {
      'S': "\u2660",
      'H': "\u2665",
      'D': "\u2666",
      'C': "\u2663",
    };

    cardsArray.map(card => {
        const tokens = card.split('');
        const suit = tokens.pop();
        const power = tokens.join('');

        if (!cardPower.includes(power) || !cardSuit.hasOwnProperty(suit)) {
           console.log(`Invalid card: ${power}${suit}`);
           isValid = false;
        } else{
            let currentCard = `${power}${cardSuit[suit]}`
            result.push(currentCard)
        }
    })

  if(isValid) {
    console.log(result.join(' '))
  }
  }

  solve(['AS', '10D', 'KH', '2C'])
  solve(['5S', '3D', 'QD', '1C'])