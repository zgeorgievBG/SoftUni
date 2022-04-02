function solve(area, vol, dataAsJSON) {

  const data = JSON.parse(dataAsJSON)
  .map(row => ({area: area.call(row), volume: vol.call(row)}));

    return data

}
const example1 = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

console.log(solve(area, vol, example1));

function area() {
    return Math.abs(this.x * this.y);
  }

  function vol() {
    return Math.abs(this.x * this.y * this.z);
  }



