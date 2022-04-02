function solve(text) {

    let pattern = /[A-Z][a-z]*|[0-9]+/g;
    let textAsArrat = text.match(pattern);
    console.log(textAsArrat.join(', '));

}

solve('ASplitMeIfYouCanHaHaYouCantOrYouCan');