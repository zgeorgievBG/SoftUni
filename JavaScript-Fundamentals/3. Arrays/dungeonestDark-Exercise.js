function solve([rooms]) {

    let health = 100;
    let isFinished = true;
    let coins = 0;

    let roomsArray = rooms.split("|");


    for (let i = 0; i < roomsArray.length; i++) {
        let [command, number] = roomsArray[i].split(' ');
        number = Number(number);

        if (command == 'potion') {
            if (health < 100) {
                let healderWith = 100 - health;
                health+= number;
                if (health > 100) { // not finished
                    health = 100;
                    console.log(`You healed for ${healderWith} hp.`);
                } else {
                console.log(`You healed for ${number} hp.`);
            }
                console.log(`Current health: ${health} hp.`);
            } else {
                console.log(`Current health: ${health} hp.`);
            }
        } else if (command == 'chest') {
            console.log(`You found ${number} coins.`);
            coins += number;
        } else {
            health -= number;
            if ( health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                isFinished = false;
                break;     
            }
        }

    }
    if (isFinished) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);    
    }
}

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);