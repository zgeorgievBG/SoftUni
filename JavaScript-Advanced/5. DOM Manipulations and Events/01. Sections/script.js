function create(words) {
   
   const mainDiv = document.getElementById('content');


   words.map(word => {
      const divElement = createElement('div');
      const pElement = createElement('p', word);
      pElement.style.display = 'none'
      divElement.appendChild(pElement);
      mainDiv.appendChild(divElement);
   })

   mainDiv.addEventListener('click', onClick);

   function onClick(ev) {
     if (ev.target.tagName == 'DIV') {
        ev.target.children[0].style.display = 'block'
     }
   }


function createElement(type, content) {
   let element = document.createElement(type);
   element.textContent = content;
   return element;
}

}