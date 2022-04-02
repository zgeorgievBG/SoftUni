function solve(cars) {

    parking = {};
    let cellNumber = 0;
  
    cars.map(x => {
        let [command, number] = x.split(', ');

        if (command == 'IN') {
            cellNumber++;
            parking[number] = cellNumber;
        } else {
            delete parking[number];
        }
    })

let parkingArr = Object.keys(parking);
    
    if (parkingArr.length !== 0) {
        parkingArr.sort((a, b) => a.localeCompare(b)).forEach(x => console.log(x));
    } else {
        console.log(`Parking Lot is Empty`);
    }

}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);
