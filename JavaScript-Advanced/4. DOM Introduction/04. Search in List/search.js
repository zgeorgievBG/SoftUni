function search() {
   let towns = Array.from((document.getElementById('towns').children));
   let searchBar = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let count = 0;

   towns.map( town => {
      if (town.textContent.includes(searchBar)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         count++;
      }
   });

   result.textContent = `${count} matches found`;

}
