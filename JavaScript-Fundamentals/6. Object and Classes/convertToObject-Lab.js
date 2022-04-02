function solve(input) {

    let newObj = JSON.parse(input);
    let keys = Object.keys(newObj);
    for (const key of keys) {
        let value = newObj[key];
        console.log(`${key}: ${value}`);
    }
 }

 solve('{"name": "George", "age": 40, "town": "Sofia"}')