function solve() {
  const inputElements = Array.from(
    document.querySelector("#container").children
  );
  const inputButton = inputElements[inputElements.length - 1];
  const onScreenMovies = document.querySelector('#movies ul');
  
  

  inputButton.addEventListener("click", addMovie);

  function addMovie(ev) {
    ev.preventDefault();
    const movieName = inputElements[0].value;
    const movieHall = inputElements[1].value;
    const ticketPrice = inputElements[2].value;


    if (!movieName || !movieHall || !ticketPrice) {
      return;
    }

    const liElement = e('li', e('span', movieName), e('strong', `Hall: ${movieHall}`), e('div', e('strong', ticketPrice), setAttribute(e('input'),'placeholder', 'Tickets Sold'), e('button', 'Archive')));
    const archiveBtn = liElement.lastChild.lastChild;
    onScreenMovies.appendChild(liElement);

    archiveBtn.addEventListener('click', archive);
  

    inputElements[0].value = "";
    inputElements[1].value = "";
    inputElements[2].value = "";
  }


 function archive(ev){
    
  }

  function setAttribute(element, attribute, text) {
    element.setAttribute(attribute, text);
    return element;
  }


  function e(type, ...content) {
    const result = document.createElement(type);

    content.forEach((el) => {
      if (typeof el == "string") {
        const node = document.createTextNode(el);
        result.appendChild(node);
      } else {
        result.appendChild(el);
      }
    });

    return result;
  }


}
