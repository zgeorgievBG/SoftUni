function extractText() {
    let liElements = document.getElementsByTagName('li');
    let elementText = Array.from(liElements).map(e => e.textContent);
    let textAria = document.getElementById('result');
    textAria.value = elementText.join('\n');
}