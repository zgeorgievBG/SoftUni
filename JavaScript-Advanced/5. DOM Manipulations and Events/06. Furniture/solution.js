function solve() {
    let mainDiv = document.getElementById('exercise').addEventListener('click', (ev) => {
      let tableElement = document.querySelector('tbody');

      if (ev.target.tagName === 'BUTTON' && ev.target.textContent == 'Generate') {
        
        let inputAsText = ev.target.parentNode.querySelector('textarea').value;
        let inputAsArrayOfObject = JSON.parse(inputAsText);
        let rowElement = createNewElement('tr', inputAsArrayOfObject);
        tableElement.appendChild(rowElement);
      

      } else  if (ev.target.tagName === 'BUTTON' && ev.target.textContent == 'Buy'){

        let buyiedProducts = [];
        let decFarctorAvrg = [];
        let totalSum = 0;

        let checkBoxes = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));
        checkBoxes.map(row => {
          let currentRow = Array.from(row.parentNode.parentNode.children);
            currentRow.map(td => {
              currentTd = Array.from(td.children);
              let productInfo = currentTd[0];
                console.log(productInfo);
            })
        })
      }
    });

    




    function createNewElement(type, [content]) {
      let element = document.createElement(type);
      

      let img = document.createElement('td');
      let imgElement = document.createElement('img');
      imgElement.setAttribute('src', content.img);
      img.appendChild(imgElement)

      let name = document.createElement('td')
      name.innerHTML = `<p>${content.name}</p>`;

      let price = document.createElement('td');
      price.innerHTML = `<p>${content.price}</p>`;

      let decFactor = document.createElement('td');
      decFactor.innerHTML = `<p>${content.decFactor}</p>`;

      let checkBox = document.createElement('td')
      let checkBoxInput = document.createElement('input');
      checkBoxInput.setAttribute('type', 'checkbox');
      checkBox.appendChild(checkBoxInput)



      element.appendChild(img);
      element.appendChild(name);
      element.appendChild(price);
      element.appendChild(decFactor);
      element.appendChild(checkBox)

      return element;
    }
}