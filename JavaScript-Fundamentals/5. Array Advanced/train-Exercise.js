function passangersControl(array) {

    let arrayCopy = array.slice();
    let firstElement = array.shift();
    let trainWagonsToString = firstElement.split(' ');
    let trainWagons = trainWagonsToString.map(Number);
    let maxCapacity = array.shift();
    maxCapacity = Number(maxCapacity);
    
    for ( let command of array ) {

        let commandInfo = command.split(' ');
        
        if ( commandInfo.length == 2 ) {
            trainWagons.push(Number(commandInfo[1]));
        } else {
            passangers = Number(commandInfo[0]);
            for ( let index in trainWagons ) {
                let currentWagon = trainWagons[index];
                if ( (currentWagon + passangers ) <= maxCapacity) {
                    trainWagons[index] += passangers;
                    break;
                }
            }
        }
}

console.log(trainWagons.join(' '));


}

passangersControl(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])