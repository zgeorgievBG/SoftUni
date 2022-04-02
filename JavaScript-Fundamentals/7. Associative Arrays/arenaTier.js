function solve(input) {

  let gladiators = {};

  let command = input.shift();

  while( command !== 'Ave Cesar') {

    let [gladiatorName, technique, skill] = command.split(' -> ');
    skill = Number(skill);

      if ( command.includes('->')) {

        if ( !gladiators.hasOwnProperty(gladiatorName) ) {
          gladiators[gladiatorName] = {
            [technique]: skill,
            'totalSkill': skill
          }
        } else if ( !gladiators[gladiatorName].hasOwnProperty(technique) ) {
          gladiators[gladiatorName][technique] = skill;
          gladiators[gladiatorName]['totalSkill'] += skill
        } else {
          let currentSkill = gladiators[gladiatorName][technique];
          currentSkill = currentSkill < skill ? skill : currentSkill;
          gladiators[gladiatorName][technique] += skill - gladiators[gladiatorName][technique];
        }

      } else if ( command.includes(' vs ')) {

        let [firstGladiator, secondGladiator] = command.split(' vs ')

        if( (gladiators.hasOwnProperty(firstGladiator)) && (gladiators.hasOwnProperty(secondGladiator))) {

          let isBattle = false;
          let firstGladiatorTechnique = Object.keys(gladiators[firstGladiator]).filter(el => el !== 'totalSkill');
          let secondGladiatorTechnique = Object.keys(gladiators[secondGladiator]).filter(el => el !== 'totalSkill');

          for (let tech in firstGladiatorTechnique) {
            if (secondGladiatorTechnique.includes(firstGladiatorTechnique[tech])) {
              isBattle = true;
            }
          }

          if(isBattle) {

            let firstGladiatorSkills = gladiators[firstGladiator]['totalSkill'];
            let secondGladiatorSkills = gladiators[secondGladiator]['totalSkill'];

            if ( firstGladiatorSkills >= secondGladiatorSkills) {
              delete gladiators[secondGladiator];
            } else {
              delete gladiators[firstGladiator];
            }

          }

        }

      }
      command = input.shift();
  }


 let sorted = Object.entries(gladiators).sort((a, b) => {
   return b[1]['totalSkill'] - a[1]['totalSkill'] || a[0].localeCompare(b[0]);
 })

 for (let [key, value] of sorted) {
   console.log(`${key}: ${value['totalSkill']} skill`);
   let skillEntries = Object.entries(value).filter(el => { return el[0] !='totalSkill'})
   .sort(([keyA, valueA], [keyB, valueB]) => { return valueB - valueA || keyA.localeCompare(keyB)});

   for (let [k, v] of skillEntries) {
     console.log(`- ${k} <!> ${v}`)
   }
 }

}

solve([
  'Pesho -> Duck -> 400',
  'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
  'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
  'Peter vs Gladius',
  'Gladius vs Julius',
  'Gladius vs Maximilian',
  'Ave Cesar'
  ]);
