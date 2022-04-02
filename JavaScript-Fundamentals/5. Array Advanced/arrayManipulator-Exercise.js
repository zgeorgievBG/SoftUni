function solve(array1, array2) {

  let commandObj = {
    add: (array, params) => {
      let index = Number(params.shift());
      let number = Number(params.shift());
      array.splice(index, 0, number);
      return array;
    },
    addMany: (array, params) => {
      params = params.map(Number);
      let index = Number(params.shift());
      let firstHalf = array.slice(0, index);
      let secondHalf = array.slice(index);
      let newArray = firstHalf.concat(params);
      array = newArray.concat(secondHalf);
      return array
    },
    contains: (array, params) => {
      
      let index = array.indexOf(Number(params[0]));
      if (index > -1) {
        console.log(index);
      } else {
        console.log('-1');
      }
      return array;
    },
    remove: (array, params) => {
      let index = Number(params[0]);
      array.splice(index, 1);
      return array;
    },
    shift: (array, params) => {
      let rotations = Number(params[0]);
      for (let i = 0; i < rotations; i++) {
        array.push(array.shift());
      }
      return array;
    },
    sumPairs: (array) => {
    },
    print: (array) => {
      console.log(array);
    },
  };

  for (let i = 0; i < array2.length; i++) {
    let [command, ...params] = array2[i].split(" ");
    array1 = commandObj[command](array1, params);
  }

}



// solve([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
solve([1, 2, 4, 5, 6, 7], ["add 1 8", "contains 1", "contains 3", "print"]);
