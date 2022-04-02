function solve() {
  let text = document.getElementById('input').value.split('.').filter(sent => sent.length > 1).map(sent => sent.trim());
  let outputArea = document.getElementById('output');

  let outputResult = '';

  while(text.length != 0) {
    let result = text.splice(0, 3);
    outputResult += `<p>${result.join('. ')}.</p>`;
  }

  outputArea.innerHTML = outputResult;

}