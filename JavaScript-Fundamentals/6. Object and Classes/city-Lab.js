function townInfo (obj) {

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }


}

townInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})