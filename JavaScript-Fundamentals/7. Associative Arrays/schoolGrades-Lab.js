function solve(array) {
  let assocArray = {};

  array.map((line) => {
    let [name, ...grades] = line.split(" ");
    grades = grades.map(Number);

    if (!assocArray.hasOwnProperty(name)) {
      assocArray[name] = grades;
    } else {
      let currentGrades = assocArray[name];
      currentGrades = currentGrades.concat(grades);
      assocArray[name] = currentGrades;
    }
  });

  let sorted = Object.entries(assocArray)
    .sort(
      (x, y) =>
        x[1].reduce((a, c) => a + c, 0) / x[1].length -
        y[1].reduce((a, c) => a + c, 0) / y[1].length
    )
    .forEach((el) => {
      console.log(`${el[0]}: ${el[1].join(", ")}`);
    });
}

solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);

solve(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
