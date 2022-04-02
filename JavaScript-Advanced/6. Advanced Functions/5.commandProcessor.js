function solution() {
  let word = "";

  function append(input) {
    word = word + input;
  }

  function removeStart(input) {
    word = word.slice(input);
  }

  function removeEnd(input) {
    word = word.slice(0, -input);
  }

  function print() {
    console.log(word);
  }

  return {
    append,
    removeEnd,
    removeStart,
    print,
  };
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();