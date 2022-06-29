class Parking{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if(this.capacity == 0) {
            throw new Error('Not enough parking space.')
        }

        this.vehicles.push({carModel, carNumber, payed:false})
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`

    }

    removeCar( carNumber) {
        const index  = this.vehicles.findIndex(c => c.carNumber === carNumber);
        if(index < 0) {
            throw new Error (`The car, you're looking for, is not found.`)
        }
        if(this.vehicles[index].payed == false) {
            throw new Error (`${carNumber} needs to pay before leaving the parking lot.`)
        }
        this.vehicles.splice(index, 1)
        this.capacity++;
        return `${carNumber} left the parking lot.`
        
    }

    pay( carNumber ) {
        const result = this.vehicles.find(c => c.carNumber === carNumber);
        if(!result) {
            throw new Error (`${carNumber} is not in the parking lot.`)
        }

        if(result.payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        result.payed = true;
        
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        const result = [];

        if(!carNumber) {
            result.push(`The Parking Lot has ${ this.capacity } empty spots left.`);
            this.vehicles.sort((a, b ) => { a.carModel.localeCompare(b.carModel)})
            .forEach(car => {
                result.push(`${car.carModel} == ${car.carNumber} - ${car.payer == true ? `Has payed`: `Not payed`}`)
            })

        } else {
            result.push(`${car.carModel} == ${car.carNumber} - ${car.payer == true ? `Has payed`: `Not payed`}`)
        }
        return result.join('\n')
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));