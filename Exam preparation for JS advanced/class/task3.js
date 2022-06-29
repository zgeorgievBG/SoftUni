function solve(destArr, criteria) {

    const outputArray = [];

    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination,
            this.price = price,
            this.status = status
        }
    }

    destArr.map(line => {
        let [destination, price, status] = line.split('|');
        price = Number(price);

        const currentTicket = new Ticket(destination, price, status);
        outputArray.push(currentTicket);
    })

    return outputArray.sort((a, b) => {
        let result = undefined;
        if(criteria !== price) {
            result = a[criteria].localeCompare(b[criteria]);
        } else {
          result =  a[criteria] - b[criteria]
        }

        return result;
    })
    

}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')


