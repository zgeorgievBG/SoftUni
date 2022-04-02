/*class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }
}

Person.prototype.getFullName = () => {
    return this.firstName + ' ' + this.lastName;
}
Person.prototype.getAge = () => {
    return this.age;
}

let firstPerson = new Person('Zlatomir', 'Georgiev', 29);

console.log(Object.getPrototypeOf(firstPerson))
console.log(Person.prototype)


function Person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,

    Object.defineProperty(this, 'fullName', {
        enumerable: true,
        get: function() {
            return `${this.firstName} ${this.lastName}`;
        },
        set: function(value) {
            [this.firstName, this.lastName] = value.split(' ');
        }
    });
}

let firstPerson = new Person('Zlatomir', 'Georgiev');
firstPerson.fullName = 'Plamen Nikolov'
console.log(firstPerson.fullName)
*/

function Person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName
}

Person.prototype.write = (message) => {
    console.log(`Person wrote: ${message}`)
}

let secondPerson = new Person('Plamen', 'Nikolov');

console.log(Person.prototype.hasOwnProperty('write'))

secondPerson.write('hello world')