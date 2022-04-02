function solve(array) {

    let items = array.shift().split(' ');


    commandsObj = {
        Buy: (array, item) => {
            if(!array.includes(item)) {
                array.push(item);
                return array;
            }
        },
        Trash: (array, item) => {
            let index = array.indexOf(item);
            if (index > -1) {
                return array.splice(index,1);
            }
        },
        Repair: (array, item) => {
            let index = array.indexOf(item); 
            if (index > -1 ) {
                element = array.splice(index, 1);
                return array.push(element[0]);
            }  
        },
        Upgrade: (array, item) => {
            let itemToFind = item.split('-');
            let index = array.indexOf(itemToFind[0]);
            if ( index > -1 ) {
                let updatedItem = item.replace('-', ':');
                return array.splice(index + 1,0,updatedItem);
            }
        }
    }

    array.map(line => {
        let [command, item] = line.split(' ');
        commandsObj[command](items, item);
    })

    console.log(items.join(' '))
}

solve(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])

solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])