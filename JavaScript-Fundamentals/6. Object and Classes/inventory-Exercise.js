function inventory(array) {

    let heroes = [];

    array.map(line => {
        let [heroName, heroLevel, ...items] = line.split(' / ');
        items =items.toString().split(', ').sort((a, b)=> a.localeCompare(b));
        let currentHero = {
            'name': heroName,
            'level': heroLevel,
            'items': items
        }
        heroes.push(currentHero);
    })

    let sorted = heroes.sort((a,b) => a.level - b.level);
    sorted.map(hero => console.log(
    `Hero: ${hero.name}
level => ${hero.level}
items => ${hero.items.join(', ')}`
    ))
}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ])