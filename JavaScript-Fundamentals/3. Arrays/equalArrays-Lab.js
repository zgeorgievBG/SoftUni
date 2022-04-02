function compareArrays(firstArray, secondArray) {

    let isEqual = true;
    let sum = 0;
    let index = ''


    for (let i = 0; i < firstArray.length; i++) {
        let elementFromFirstArray = Number(firstArray[i]);
        let elementFromSecondArray = Number(secondArray[i]);

        if (elementFromFirstArray == elementFromSecondArray) {
            sum += elementFromFirstArray;
        } else {
            isEqual = false;
            index = i;
            break;
        }
    }
    if(isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`)
    }

}

compareArrays(['10','20','30'], ['10','20','30'])
compareArrays(['1','2','3','4','5'], ['1','2','4','4','5'])