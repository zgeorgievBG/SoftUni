function solve(array) {

    let obj = {};

    array.map(x => {
        let [companyName, id] = x.split(' -> ');
        
        if(!obj.hasOwnProperty(companyName)) {
            obj[companyName] = [];
            if(!obj[companyName].includes(id))
            obj[companyName].push(id);
        } else {
            if(!obj[companyName].includes(id))
            obj[companyName].push(id);
        }
    })

    let sorted = (Object.entries(obj)).sort((a, b) => a[0].localeCompare(b[0]));
    for ( let i in sorted) {
        let companyName = sorted[i][0]
        let id = sorted[i][1]
        console.log(companyName);
        id.map(el => {
            console.log(`-- ${el}`)
        })
        

    }

}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);

    // solve([
    //     'SoftUni -> AA12345',
    //     'SoftUni -> CC12344',
    //     'Lenovo -> XX23456',
    //     'SoftUni -> AA12345',
    //     'Movement -> DD11111'
    //     ])