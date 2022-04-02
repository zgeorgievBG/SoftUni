function solve(input, criteria) {
  const tickets = [];

  class Ticket {
    constructor(destination, price, status) {
      (this.destination = destination),
        (this.price = price),
        (this.status = status);
    }
  }

  input.map((line) => {
    let [dest, price, status] = line.split("|");
    price = Number(price);
    tickets.push(new Ticket(dest, price, status));
  });

  return tickets.sort((a, b) => {
    if (criteria !== "price") {
      result = a[criteria].localeCompare(b[criteria]);

      if (result == 0) {
        return 1;
      }
    } else {
      result = a[criteria] - b[criteria];
    }

    return result;
  });
}

// console.log(solve(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'))

console.log(
  solve(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "price"
  )
);
