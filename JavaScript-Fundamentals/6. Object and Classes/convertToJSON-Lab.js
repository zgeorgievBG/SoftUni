function solve(name, lastName, hairColor) {

    let personInfo = {
        name,
        lastName,
        hairColor
    };

    let jsonFile = JSON.stringify(personInfo);
    console.log(jsonFile);
}

solve('George',
'Jones',
'Brown')