function solve(array) {

    let townInfo = {};

    array.map(info => {
        let [town, population] = info.split(' <-> ');
        population = Number(population);

        if(townInfo.hasOwnProperty(town)) {
            population += townInfo[town];
        }

        townInfo[town] = population;
    })

    Object.keys(townInfo).map(key => {
        console.log(`${key} : ${townInfo[key]}`)
    })

}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])