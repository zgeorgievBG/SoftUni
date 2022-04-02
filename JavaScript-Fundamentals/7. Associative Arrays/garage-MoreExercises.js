function solve(array) {

    let garageObj = {};

    array.map( el => {
        let tokens = el.split(' - ');
        let garageNumber = tokens[0];
        let params = tokens[1].split(', ');
        let currentObj = [];
        params.map(el => {
            el = el.replace(': ', ' - ');
            currentObj.push(el);
        })

        if(!garageObj.hasOwnProperty(garageNumber)) {
            garageObj[garageNumber] = [];
            garageObj[garageNumber].push(currentObj);
        } else {
            garageObj[garageNumber].push(currentObj);
        }

    })


   Object.entries(garageObj).map(el => {
       console.log(`Garage № ${el[0]}`);
       el[1].map(x => console.log(`--- ${x.join(', ')}`))
   })
}

solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);