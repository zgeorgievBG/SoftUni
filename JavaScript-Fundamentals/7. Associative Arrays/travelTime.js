function travel(array) {
  let dest = {};

  array.map((line) => {
    let [country, town, price] = line.split(" > ");
    price = Number(price);

    if (!dest.hasOwnProperty(country)) {
      dest[country] = {
       [town]:price
      };
    } else {
      if (!dest[country].hasOwnProperty(town)) {
        dest[country][town] = price
      } else {
        let existing = dest[country][town];
        if (existing > price);
        dest[country][town] = price;
      }
    }
  });

  let entries = Object.entries(dest).sort((a, b) => a[0].localeCompare(b[0]));
  
  for( let i in entries) {
    let result = entries[i][0]+ ' -> ';
    let entriesTown = Object.entries(entries[i][1])
    entriesTown.sort(( a, b) => a[1] - b[1]);
    
    for(let i in entriesTown) {
      result += entriesTown[i][0] + ' -> ' + entriesTown[i][1] + ' ';
    }
    console.log(result);
  }

}

travel([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200"
  ]);
