function solve(array) {
  let movies = [];

  array.map((line) => {
    if (line.includes("addMovie")) {
        let [command, ...params] = line.split(' ');
        params = params.join(' ');
        let currentObj = {
            'name': params
        }
        movies.push(currentObj)
    } else if (line.includes("directedBy")) {
        let [movieName, director] = line.split(' directedBy ');
        movies.map(movie => {
            if(movie.name == movieName) {
                movie['director'] = director;
            }
        })
    } else if (line.includes("onDate")) {
        let [movieName, date] = line.split(' onDate ');
        movies.map(movie => {
            if(movie.name == movieName) {
                movie['date'] = date;
            }
        })
    }
  });

  movies.map(movie => {
      if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
          console.log(JSON.stringify(movie))
      }
  })

}

// solve([
//   "addMovie Fast and Furious",
//   "addMovie Godfather",
//   "Inception directedBy Christopher Nolan",
//   "Godfather directedBy Francis Ford Coppola",
//   "Godfather onDate 29.07.2018",
//   "Fast and Furious onDate 30.07.2018",
//   "Batman onDate 01.08.2018",
//   "Fast and Furious directedBy Rob Cohen",
// ]);

solve(['addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
   'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'])
