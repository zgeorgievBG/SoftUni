function solve(word, text) {

    word = word.toLowerCase();
    text = text.split(' ').map(word => word.toLowerCase()).join(' ');
    let index = text.includes(word);
    index == false ? console.log(`${word} not found!`) : console.log(word);

}

solve('javascript',
'JavaScript is the best programming language')
solve('python',
'JavaScript is the best programming language')