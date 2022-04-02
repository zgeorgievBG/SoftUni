function encodeAndDecodeMessages() {
  const mainEl = document.getElementById("main");

  mainEl.addEventListener("click", (ev) => {
    const clicked = ev.target;
    let textAreas = clicked.parentNode.parentNode.querySelectorAll("textarea");
    if (
      clicked.tagName === "BUTTON" &&
      clicked.textContent === "Encode and send it"
    ) {
      const result = encode(textAreas[0].value);

      textAreas[1].textContent = result;
      textAreas[0].value = '';
    } else if (
      clicked.tagName === "BUTTON" &&
      clicked.textContent === "Decode and read it"
    ) {
      let text = textAreas[1].value;
      let result = decoding(text);
      textAreas[1].value = result;
    }
  });

  function encode(text) {
    let result = [];

    for (let i = 0; i < text.length; i++) {
        let currentLetter = text[i].charCodeAt();
        currentLetter++;
        let newLetter = String.fromCharCode(currentLetter);
        result.push(newLetter);
    }
    return result.join("");
  }

  function decoding(text) {
    let result = [];

    for (let i = 0; i < text.length; i++) {
      let currentLetter = text[i].charCodeAt();
      currentLetter--;
      let newLetter = String.fromCharCode(currentLetter);
      result.push(newLetter);
    }

    return result.join("");
  }
}
