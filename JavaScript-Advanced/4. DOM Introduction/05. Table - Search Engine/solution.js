function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let table = Array.from(document.querySelector('.container').querySelectorAll('tbody tr'));

   function onClick() {
      table.map(r => r.classList.remove('select'));
      const searchBar = document.getElementById('searchField').value;
      table.map(row => {
         if (row.textContent.includes(searchBar)) {
            row.classList.add('select');
         }
      });
   }


}