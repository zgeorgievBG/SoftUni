function sumTable() {
    let result = Array.from(document.querySelector('table').querySelectorAll('td')).filter((el, index) => index % 2 != 0).slice(0, -1).map(n => n = Number(n.innerHTML)).reduce((a,c) => a + c, 0);
    let sum = document.getElementById('sum');
    sum.innerHTML = result;
}