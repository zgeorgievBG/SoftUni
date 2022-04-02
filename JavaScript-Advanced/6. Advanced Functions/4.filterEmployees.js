<<<<<<< HEAD
=======
function solve(dataAsJSON, criteria) {

const data = JSON.parse(dataAsJSON);
let [gender, value] = criteria.split('-');
let count = 0;


 data.map(person => checkPerson(person));



 function checkPerson(p) {

    if (p[gender] == value || criteria == 'all') {
        console.log(`${count}. ${p.first_name} ${p.last_name} - ${p.email}`);
        count++;
    }

 }

}

const dataAsJSON = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`;

  const dataAsJSON1 = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`;

  solve(dataAsJSON,'gender-Female');
  solve(dataAsJSON1, 'all');
>>>>>>> f10f3c6fbac6979efb9ceb4ffd70d6dfbbacfeb7
