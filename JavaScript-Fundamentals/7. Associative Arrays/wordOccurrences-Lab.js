function solve(input) {

    let words = new Map();

    input.map(word => {
        if (!words.has(word)) {
            words.set(word, 1);
        } else {
            let count = words.get(word);
            words.set(word, ++count);
        }
    })

    let sorted = Array.from(words). sort((a, b) => b[1] - a[1])
    sorted.map(line => console.log(`${line[0]} -> ${line[1]} times`))
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])