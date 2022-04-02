
function getPersons () {

    const personsArray = [];

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.email = email
        }
    }

    const firstPerson = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    const secondPerson = new Person('SoftUni')
    const thirdPerson = new Person('Stephan', 'Johnson', 25)
    const fourthPerson = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    
    personsArray.push(firstPerson, secondPerson, thirdPerson, fourthPerson);

    return personsArray

}

console.log(getPersons())