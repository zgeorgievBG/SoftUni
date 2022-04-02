function solve(text) {

    let firstHalf = text.substring(0, text.length / 2).split('').reverse().join('');
    let secondHalf = text.substring(text.length / 2).split('').reverse().join('');
    console.log(firstHalf);
    console.log(secondHalf);

}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');