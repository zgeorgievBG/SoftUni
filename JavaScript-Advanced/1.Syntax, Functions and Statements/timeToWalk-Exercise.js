function solve(steps, length, speedKmH) {

    let speed = speedKmH*1000/3600;
    let distance = steps * length;
    let minutesForBreak = Math.floor(distance / 500);
    let time = (distance/speed) + minutesForBreak*60;

    const hours = Math.floor(time/3600).toFixed(0).padStart(2,'0');
    const minutes = Math.floor(time/60).toFixed(0).padStart(2,'0');
    const seconds = Math.ceil(time - minutes*60 - hours*3600).toFixed(0).padStart(2,'0');
    
        return`${hours}:${minutes}:${seconds}`;
  


}

console.log(solve(4000, 0.60, 5))
solve(2564, 0.70, 5.5)