function solve(speed, area) {

    const areaObj = {
        'residential': 20,
        'city': 50,
        'interstate': 90,
        'motorway': 130 
    }

    
    

    if( speed <= areaObj[area]) {
        console.log(`Driving ${speed} km/h in a ${areaObj[area]} zone`)
    } else {
        let overTheLimit = speed -  areaObj[area];
        if(overTheLimit <= 20) {
            let status = 'speeding'
            console.log(`The speed is ${overTheLimit} km/h faster than the allowed speed of ${areaObj[area]} - ${status}`)
        } else if ( overTheLimit <= 40) {
            let status = 'excessive speeding'
            console.log(`The speed is ${overTheLimit} km/h faster than the allowed speed of ${areaObj[area]} - ${status}`)
        } else {
            let status = 'reckless driving'
            console.log(`The speed is ${overTheLimit} km/h faster than the allowed speed of ${areaObj[area]} - ${status}`)
        }
    }

}

solve(40, 'city');
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')