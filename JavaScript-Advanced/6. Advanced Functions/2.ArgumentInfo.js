function solve(...params) {
  let info = new Map();

  params.map((param) => checkInput(param));

  function checkInput(param) {
    console.log(`${typeof param}: ${param}`);

    if (!info.has(typeof param)) {
      info.set(typeof param, 1);
    } else {
      let count = info.get(typeof param);
      count++;
      info.set(typeof param, count);
    }
  }

Array.from(info).sort((a, b) => b[1] - a[1]).forEach(el =>console.log(`${el[0]} = ${el[1]}`));
}

solve(
  "cat",
  42,
  function () {
    console.log("Hello world!");
  }
);
