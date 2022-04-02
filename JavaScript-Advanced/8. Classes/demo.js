class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    get age() {
        return this._age
    }

    set age(value) {
        if ( typeof value == 'number') {
            this._age = value
        } else {
            throw new TypeError('input value is not a number');
        }
    }

    get name() {
        return this._age
    }

    set name(value) {
        if ( typeof value == 'string') {
            this._name = value
        } else {
            throw new TypeError('input name must be of type string');
        }
    }

}


const firstPerson = new Person('zlati', 29);

console.log(firstPerson)

// console.log(firstPerson.age)

// firstPerson.age = 30;

// console.log(firstPerson)