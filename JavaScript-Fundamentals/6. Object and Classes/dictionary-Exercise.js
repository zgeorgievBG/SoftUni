function solve(input) {

    const dictionary = [];

    input.map(el => {
    let currElement =JSON.parse(el);
    for (let [term, def] of Object.entries(currElement)) {
        let obj = {};
        obj.Term = term;
        obj.Definition = def;

        let replaceTerm = dictionary.find(x => x.Term === term);
        if(replaceTerm) {
            replaceTerm.Definition = def;
        } else {
            dictionary.push(obj);
        }
       
    }
    })

    dictionary.sort((a,b) => (a.Term).localeCompare(b.Term))
    .forEach(obj => console.log(`Term: ${obj.Term} => Definition: ${obj.Definition}`));

}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);