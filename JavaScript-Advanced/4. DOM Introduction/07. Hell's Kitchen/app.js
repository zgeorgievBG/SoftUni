function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('textarea');
   let bestRestaurantP = document.querySelector('#outputs p');
   let bestWorkersP = document.querySelector('#workers p');

   function onClick () {
      let restaurants = {};

      JSON.parse(input.value).map((line) => {
         const tokens = line.split(' - ');
         let name = tokens[0];
         let workersArr = tokens[1].split(', ');
         let workers = [];

         workersArr.map(worker => {
            const tokens = worker.split(' ');
            let workerName = tokens[0];
            let salary = Number(tokens[1]);
            workers.push({name: workerName, salary});
         });


         if(restaurants[name]) {
            workers = workers.concat(restaurants[name].workers);
         }

         workers.sort((worker1, worker2) => worker2.salary - worker1.salary);

         let bestSalary = workers[0].salary;
         let avarageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[name] = {
            workers,
            avarageSalary,
            bestSalary
         };
      });
       
      let bestRestaurantSalary = 0;
      let best;

      for (const name in restaurants) {
         if (restaurants[name].avarageSalary > bestRestaurantSalary) {
            best = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               avarageSalary: restaurants[name].avarageSalary
            }; 

            bestRestaurantSalary = restaurants[name].avarageSalary;
         }  
      }

      bestRestaurantP.textContent = `Name: ${best.name} Average Salary: ${best.avarageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;

      let workersResult = [];

      best.workers.map(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      });

      bestWorkersP.textContent = workersResult.join(' ');
   }
}