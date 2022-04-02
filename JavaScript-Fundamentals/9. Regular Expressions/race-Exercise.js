function solve(race) {

    let names = race.shift().split(', ');
    let racers = {};
    names.forEach(name => {
      racers[name] = 0;
    });
  
  
  
    for (const line of race) {
      let regexName = /[A-Za-z]/g;
      let match = line.match(regexName);
      let name = match.join('');
      if (racers.hasOwnProperty(name)) {
          let regexDistance = /[0-9]/g;
          let matchDist = line.match(regexDistance)
          .map(Number)
          .reduce((a,b) => a + b);
  
          racers[name] += matchDist;
        }
      }
  
      let arr = Object.keys(racers).sort((a,b) => racers[b] - racers[a]);
      console.log(`1st place: ${arr[0]}`);
      console.log(`2nd place: ${arr[1]}`);
      console.log(`3rd place: ${arr[2]}`);
    
      
    
    }

solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
   ' T$o553m&6',
    'end of race']);