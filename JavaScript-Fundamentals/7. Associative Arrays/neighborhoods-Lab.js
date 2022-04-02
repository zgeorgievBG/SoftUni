function solve(input) {

    let map = new Map();

    let adress = input.shift().split(', ');
    adress.forEach(x => map.set(x, []))
    
    input.map(line => {
        let [address, name] = line.split(' - ')
        if(map.has(address)) {
            let peoples = map.get(address);
            peoples.push(name);
            map.set(address, peoples);
        }
    })

   let sorted = Array.from(map)
   .sort((a, b) => b[1].length - a[1].length);

   sorted.map(line => {
        let result = '';
        line[1].map(x => result += `--${x}\n`);
        result = result.trim();

       console.log(`${line[0]}: ${line[1].length}\n${result}`)
   })
}

solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy'])