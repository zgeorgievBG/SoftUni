function employee(array) {

    let employees = [];

    array.map(person => {
        let currentPerson = {
            'name': person,
            'number': person.length
        }
        employees.push(currentPerson);
    })

    employees.map(person => {
        console.log(`Name: ${person['name']} -- Personal Number: ${person['number']}`)
    })
}

employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);