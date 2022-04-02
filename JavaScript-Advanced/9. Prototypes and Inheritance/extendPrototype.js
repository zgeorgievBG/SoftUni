function extendProrotype(classToExtend) {

    
class Person{
    constructor(name, email) {
        this.name = name,
        this.email = email
        this.species = 'Human'
    }

    toString() {
        return `Person (name: ${this.name}, email: ${this.email})`
    }
}


Person.prototype.species = 'Human';
Person.prototype.toSpeciesString = function() {
    return `I am a ${this.species}. ${this.toString()}`;
}

    
     class Teacher extends Person {
         constructor(name, email, subject) {
             super(name, email)
             this.subject = subject
         }

         toString() {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
        }
     }
    
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course
        }

        toString() {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
        }
        
    }


const firstStudent = new Student('Plamen', 'plamen@abv.bg', 'mythology');

console.log(firstStudent.toSpeciesString())
}


extendProrotype()