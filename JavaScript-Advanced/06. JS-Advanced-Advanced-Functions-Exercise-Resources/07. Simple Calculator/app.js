function calculator() {
  let firstNum;
  let secondNum;
  let result;
  
  return {
    init: (selector1, selector2, resultSelector) => {
      firstNum = document.querySelector(selector1);
      secondNum = document.querySelector(selector2);
      result = document.querySelector(resultSelector);
    },
    add: () => {
      result.value = Number(firstNum.value) + Number(secondNum.value);
    },
    subtract: () => {
      result.value = Number(firstNum.value) - Number(secondNum.value);
    },
  };
}

let obj = calculator();
obj.init("#num1", "#num2", "#result");

let add = obj.add;
let subtract = obj.subtract;
