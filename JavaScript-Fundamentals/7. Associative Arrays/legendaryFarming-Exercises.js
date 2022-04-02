function solve(string) {

    let keyMaterials = {
        'motes': 0,
        'shards': 0,
        'fragments': 0
    };
    let junkMaterials = {};

    let itemsObj = {
        'motes': 'Dragonwrath',
        'shards': 'Shadowmourne',
        'fragments': 'Valanyr'
    }

    string = string.split(' ');
    for (let i = 0; i <string.length; i +=2 ) {
        let qty = Number(string[i]);
        let material = string[i + 1].toLowerCase();

        if (keyMaterials.hasOwnProperty(material)) {
            keyMaterials[material] += qty;
            if(keyMaterials[material] >= 250) {
                console.log(`${itemsObj[material]} obtained!`);
                keyMaterials[material] -= 250;
                break;
            }
        } else {
            if(junkMaterials.hasOwnProperty(material)) {
                junkMaterials[material] += qty
            } else {
                junkMaterials[material] = qty;
            }
        }
    }

Object.entries(keyMaterials).sort((a, b) => {
        let refA = a[1]
        let refB = b[1];
        let result = refB - refA;
        if ( result == 0) {
            result = a[0].localeCompare(b[0]);
        }

        return result
    }).forEach(el => {
        console.log(`${el[0]}: ${el[1]}`)
    })


    Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0])).forEach(el => {
        console.log(`${el[0]}: ${el[1]}`)
    })



}

solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');