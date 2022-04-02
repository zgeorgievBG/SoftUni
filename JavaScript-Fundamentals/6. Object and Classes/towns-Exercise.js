function townInfo(array) {

    let towns = [];

    array.map(town => {
        let [townName, latitude, longitude] = town.split(' | ');

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let currentTown = {
            'town': townName,
            latitude: latitude,
            longitude: longitude
        }

        towns.push(currentTown);
    })
towns.map(town => console.log(town))

}

townInfo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])