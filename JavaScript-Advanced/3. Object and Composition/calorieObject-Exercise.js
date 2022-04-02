function solve(array) {

   let productsObj = {};
   
   for ( let i = 0; i < array.length; i += 2) {
       productsObj[array[i]] = Number(array[i + 1]);
   }

   console.log(productsObj);

}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);