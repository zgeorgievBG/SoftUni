function calculate(parm1, parm2, operator) {
  let result;

  if (operator == "-") {
    subtrackt(parm1, parm2);
  } else if (operator == "+") {
    sum(parm1, parm2);
  } else if (operator == "/") {
    devide(parm1, parm2);
  } else if (operator == "*") {
    multiply(parm1, parm2);
  } else if (operator == "%") {
    moduleDevide(parm1, parm2);
  } else {
    powNumbers(parm1, parm2);
  }

  function subtrackt(a, b) {
    result = a - b;
    return result;
  }

  function sum(a, b) {
    result = a + b;
    return result;
  }

  function devide(a, b) {
    result = a / b;
    return result;
  }

  function multiply(a, b) {
    result = a * b;
    return result;
  }

  function moduleDevide(a, b) {
      result = a % b;
      return result;
  }

  function powNumbers(a, b) {
      result = a ** b;
      return result;
  }

  console.log(result);
}

calculate(3, 5.5, "*");
calculate(3, 5.5, "-");
calculate(3, 5.5, "+");
calculate(3, 5.5, "/");
calculate(3, 5.5, "%");
calculate(3, 5.5, "**");