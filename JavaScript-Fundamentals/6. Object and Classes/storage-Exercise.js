class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(obj) {
        this.capacity -= obj.quantity;
        this.totalCost += obj.price * obj.quantity;
        this.storage.push(obj);
    }

    getProducts() {
        let result = '';
        for( let line of this.storage) {
            result += JSON.stringify(line) + "\n"; 
        }
        return result.trim();
    }

}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);