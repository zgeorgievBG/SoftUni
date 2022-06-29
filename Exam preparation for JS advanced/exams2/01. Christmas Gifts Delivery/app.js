function solution() {
  const [gifts, send, discard] = document.querySelectorAll("section ul");
  const input = document.querySelector("input");
  const addBtn = document.querySelector("button");

  addBtn.addEventListener("click", addCard);

  function addCard(ev) {
      ev.preventDefault()
    const name = input.value;

    const liElement = e('li', 'class=gift', name);

    const sendBtn = e('button', 'id=sendButton', 'Send');
    const discardBtn = e('button', 'class=discardButton', 'Discard');

    liElement.appendChild(sendBtn);
    liElement.appendChild(discardBtn);
    gifts.appendChild(liElement);

    sendBtn.addEventListener('click', () => sendCard(name, liElement));
    discardBtn.addEventListener('click', () => discardCard(name, liElement));
    
    sortGift();

    input.value = '';
  }

  function sortGift() {
        Array.from(gifts.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => gifts.appendChild(li))
  }

  function sendCard(name, element) {
      element.remove();
    const liEl = e('li', '', name);
    send.appendChild(liEl);
  }

  function discardCard(name, element) {
      element.remove();
      const liEl = e('li', '', name);
      discard.appendChild(liEl);
  }

  function e(type, attribute, ...content) {
    const result = document.createElement(type);

    if (content.length > 0) {
      content.forEach((el) => {
        if (typeof el == "string") {
          const node = document.createTextNode(el);
          result.appendChild(node);
        } else {
          result.appendChild(el);
        }
      });
    }
    if (attribute) {
      [attrType, value] = attribute.split("=");
      if (attrType == "id") {
        result.setAttribute(name, value);
      } else {
        result.classList.add(value);
      }
    }

    return result;
  }
}
