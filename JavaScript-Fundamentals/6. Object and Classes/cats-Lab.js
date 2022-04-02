function cats(arr) {

    class Cat {
        constructor(name, age){
            this.name = name,
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    arr.map(x => {
        const [name, age] = x.split(' ');
        const cat = new Cat(name, age);
        cat.meow();
    })


}

cats(['Mellow 2', 'Tom 5']);