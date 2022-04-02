(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1]
     }
     
     Array.prototype.skip = function(index) {

        if( index < 0) {
            index = 0;
        } else if ( index > this.length -1) {
            index = this.length - 1;
        }
 
         index = Number(index);
         return this.slice(index);
     }
     
     Array.prototype.take = function(index) {

        if( index < 0) {
            return this
        } else if ( index > this.length -1) {
            return this
        }

 
         index = Number(index);
         return this.slice(0, index);
     }
     
     Array.prototype.sum = function() {
         return this.reduce((a, c) => a + c, 0)
     }
     
     Array.prototype.avarage = function() {
         return this.reduce((a, c) => (a + c) , 0)  / this.length
     }
})();


let newArray = [1,2,3,4,5];

const slicedArray = newArray.skip('1');
console.log(slicedArray);