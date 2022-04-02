function solve(array) {

    let games = array.shift().split(" ");

  let commands = {
    Install: (gameName) => {
      if(!games.includes(gameName)) {
        games.push(gameName);
      }
    },
    Uninstall: (gameName) => {
        let index = games.indexOf(gameName);
        if (index !== -1) {
            games.splice(index, 1);
        }
    },
    Update: (gameName) => {
        let index = games.indexOf(gameName);
        if (index !== -1) {
            games.splice(index, 1);
            games.push(gameName);
        }
    },
    Expansion: (gameName) => {
        let [name, expansion] = gameName.split('-');
        let index = games.indexOf(name);
        if (index !== -1) {
            gameName = gameName.replace('-', ':');
            games.splice(index + 1, 0, gameName);

        } 

    },
  };



  let [command, game] = array.shift().split(" ");

  while (command !== "Play!") {
    commands[command](game);

    [command, game] = array.shift().split(" ");
  }

  console.log(games.join(' '))
}

solve([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);

solve(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!'])
