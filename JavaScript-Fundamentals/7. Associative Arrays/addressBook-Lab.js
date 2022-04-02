function solve(input) {
    let addressBook = {};
  
    input.map((el) => {
      let [name, address] = el.split(":");
      addressBook[name] = address;
    });
  
    let result = Object.entries(addressBook)
    result.sort((a, b) => a[0].localeCompare(b[0])).forEach(x => console.log(`${x[0]} -> ${x[1]}`));
  }

  solve(['Tim:Doe Crossing',
  'Bill:Nelson Place',
  'Peter:Carlyle Ave',
  'Bill:Ornery Rd'])