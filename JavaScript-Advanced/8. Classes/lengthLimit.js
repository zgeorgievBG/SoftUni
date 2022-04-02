class Stringer {
    constructor(text, length) {
        this.initialLength = length;
        this.innerString = text,
        this.innerLength = length
    }

    increase(input) {
        this.innerLength += input;
    }

    decrease(input) {
      this.innerLength -= input     
      if (this.innerLength < 0) {
          this.innerLength = 0;
      } 
    }

    toString() {
        if(this.innerLength == 0) {
            return `...`;
        } else if (this.innerString.length <= this.innerLength) {
            return this.innerString    
        }   else {
            return this.innerString.slice(0, this.innerLength ) + '.'.repeat(this.initialLength - this.innerLength)
        }
     
    }


}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(2);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test