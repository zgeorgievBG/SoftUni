function solve(input) {
    let army = {};
  
    input.map((x) => {
      let heroName = "";
      if (x.includes("arrives")) {
        //Adding army leaders...
        heroName = x.slice(0, x.length - "arrives".length - 1);
        army[heroName] = {
            'totalCount': 0
        };
      } else if (x.includes("defeated")) {
        //deleting army leaders
        heroName = x.slice(0, x.length - "defeated".length - 1);
        delete army[heroName];
      } else if (x.includes(" + ")) {
        //adding army count if the army exist
        let [armyName, armyCount] = x.split(" + ");
        Object.keys(army).forEach((key) => {
          if (army[key].hasOwnProperty(armyName)) {
            army[key][armyName] += Number(armyCount);
            army[key]['totalCount'] += Number(armyCount)
          }
        });
      } else {
        //adding army to a leader if leader exist...
        let [heroName, ...armyInfo] = x.split(": ");
        let [armyName, armyCount] = armyInfo.join(" ").split(", ");
        armyCount = Number(armyCount);
        if (army.hasOwnProperty(heroName)) {
          army[heroName][armyName] = armyCount;
          army[heroName]['totalCount'] += armyCount
        }
  
      }
    });
  
    //Sorting........ :(
  
    let sorted = Object.entries(army).sort((a, b) => b[1].totalCount - a[1].totalCount);
    Object.values(sorted).map(el => {
        let totalCount = el[1].totalCount;
        let leaderName = el[0];
        delete el[1].totalCount;
        console.log(`${leaderName}: ${totalCount}`);
      //   console.log(Object.entries(el[1]))
  Object.entries(el[1]).sort((a,b) => b[1] - a[1]).forEach(x => console.log(`>>> ${x[0]} - ${x[1]}`));
  
    });
  
  
  }

  solve(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])