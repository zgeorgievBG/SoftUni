class Bank {
  #bankName;
  constructor(bankName) {
    this.#bankName = bankName;
    this.allCustomers = [];
  }


  newCustomer(customerObj) {
      const result = this.allCustomers.find(c => c.personalId === customerObj.personalId)
    if (result) {
      throw new Error(
        `${customerObj.firstName} ${customerObj.lastName} is already our customer!`
      );
    } else {
      this.allCustomers.push(customerObj);
    }

    return customerObj;
  }



  depositMoney(id, amount) {
    const result = this.allCustomers.find((c) => c.personalId === id);

    if (!result) {
      throw new Error(`We have no customer with this ID!`);
    }

    if(!result['transactions']) {
        result.transactions = [];
        result.totalMoney = 0;
    }

    result.totalMoney += amount

    result.transactions.push({'id': result.transactions.length + 1, 'firsName': result.firstName, 'lastName': result.lastName, 'amount': amount, 'operation': 'made deposit of'})

    return `${result.totalMoney}$`

  }



  withdrawMoney(id, amount) {
    const result = this.allCustomers.find((c) => c.personalId === id);

    if (!result) {
      throw new Error(`We have no customer with this ID!`);
    }

    if (result.totalMoney < amount) {
      throw new Error(
        `${result.firstName} ${result.lastName} does not have enough money to withdraw that amount!`
      );
    }



    result.totalMoney -= amount;

    result.transactions.push({'id': result.transactions.length + 1, 'firsName': result.firstName, 'lastName': result.lastName, 'amount': amount, 'operation': 'withdrew'})

    return `${result.totalMoney}$`;

  }



  customerInfo(id) {
    const result = this.allCustomers.find((c) => c.personalId === id);

    if (!result) {
      throw new Error(`We have no customer with this ID!`);
    }

    const finalResult = [];

    finalResult.push(`Bank name: ${this.#bankName}`)
    finalResult.push(`Customer name: ${result.firstName} ${result.lastName}`)
    finalResult.push(`Customer ID: ${result.personalId}`)
    finalResult.push(`Total Money: ${result.totalMoney}$`)
    finalResult.push(`Transactions:`)

    result.transactions.sort((a, b) => b.id - a.id)
    .forEach(trans => {
      finalResult.push(`${trans.id}. ${trans.firsName} ${trans.lastName} ${trans.operation} ${trans.amount}$!`)
    })

    return finalResult.join('\n')


  }
}



let bank = new Bank("SoftUni Bank");

console.log(
  bank.newCustomer({
    firstName: "Svetlin",
    lastName: "Nakov",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: "Svetlin",
    lastName: "Nakov",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: "Mihaela",
    lastName: "Mileva",
    personalId: 4151596,
  })
);

// bank.depositMoney(6233267,250);
// console.log(bank.depositMoney(6233267,250));

// console.log(bank.withdrawMoney(6233267,400));
// bank.depositMoney(4151596,555);


// console.log(bank.customerInfo(6233267));
// console.log(bank.customerInfo(4151596));


