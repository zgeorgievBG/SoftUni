function solve(array) {

    let newArr = array.shift();
    let numbers = newArr.split(' ');
    let arr = numbers.map(Number);
    


    for (let i = 0; i <= array.length -1; i++) {
        let [command, firstNum, secondNum] 
        = array[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);     
        
        switch(command) {
            case 'Add': addElement(firstNum);
                break;
            case 'Remove': removeElement(firstNum);
                break;
            case 'RemoveAt': removeAt (firstNum);
                break;
            case 'Insert': insert(firstNum, secondNum);
                break;
       }
    }

    function addElement(num) {
        arr.push(num);
    }

    function removeElement(num) {
        arr = arr.filter( el => el !== num);
    }
   
    function removeAt(index){
        arr.splice(index, 1);
    }

    function insert(num, index) {
        arr.splice(index,0,num);
    }
    

    console.log(arr.join(' '));
    
    
}

solve(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])