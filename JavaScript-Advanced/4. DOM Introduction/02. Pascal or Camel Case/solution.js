function solve() {
  let inputText = document.getElementById('text').value;
  const command = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  if ( command == 'Camel Case') {
    inputText = inputText.split(' ');

    for ( let i = 0; i < inputText.length; i ++) {
      if (i == 0 ) {
        inputText[i] = inputText[i].toLowerCase();
      } else {
      inputText[i] = inputText[i][0].toUpperCase() + inputText[i].slice(1).toLowerCase();
    }
    }

    result.textContent = inputText.join('');

  } else if (command == 'Pascal Case') {

    inputText = inputText.split(' ');
    for ( let i = 0; i < inputText.length; i ++) {
      inputText[i] = inputText[i][0].toUpperCase() + inputText[i].slice(1).toLowerCase();
    }

    result.textContent = inputText.join('');

  } else {

    result.textContent = 'Error!';
  }
}