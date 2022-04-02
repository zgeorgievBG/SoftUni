function solve(array) {

   let sum = array[0].reduce((a, c) => a + c, 0);
   let isMagical = true;

   for (let i = 0; i < array.length; i++) {
       let currentSum = array[i].reduce((a, c) => a + c, 0);
       if (currentSum !== sum) {
           isMagical = false;
       }


   } 
   
   if(isMagical) {
       console.log(1);
   }

}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);