function solve(text) {


let patter = /^#[A-Za-z]+$/g;
text = text.split(' ').filter(el => patter.test(el));


text.map(word => {
    let newWord = word.substring(1);
    console.log(newWord) 
})


}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');