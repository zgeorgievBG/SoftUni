function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

let myCounter = createCounter();

myCounter();
myCounter();
myCounter();
myCounter();
myCounter();

let myCounter1 = createCounter();

myCounter1();
myCounter1();


// Всеки път когато присвойм функция към нова променлива се създава нов кложър