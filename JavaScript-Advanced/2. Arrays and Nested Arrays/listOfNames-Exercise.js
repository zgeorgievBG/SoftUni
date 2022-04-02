function solve(names) {

    let index = 1;
    names = names.sort((a, b) => a.localeCompare(b)).map(name => {
        console.log(`${index}.${name}`);
        index++
    });
    
}

solve(["John", "Bob", "Christina", "Ema"])