function solve(input) {

    let reversedArray = [];


  for (let i = 0; i < Math.ceil(input.length / 2); i++) {
    
    reversedArray[i] = input[input.length - 1 - i];
    reversedArray[input.length - i - 1] = input[i]



  }

  console.log(reversedArray.join(' '))
}

solve(["a", "b", "c", "d", "e"]);
solve(["abc", "def", "hig", "klm", "nop"]);
solve(["33", "123", "0", "dd"]);
