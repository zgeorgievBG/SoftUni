function attachGradientEvents() {

    let result = document.getElementById('result');

    let divElement = document.getElementById('gradient').addEventListener('mousemove', (event)=> {
        console.log(event);

    });
} 