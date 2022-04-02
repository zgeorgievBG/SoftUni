class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.email = email
    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}


const firstPerson = new Person('Zlatomir', 'Georgiev', 29, 'zlatiii@abv.bg');
console.log(firstPerson.toString())