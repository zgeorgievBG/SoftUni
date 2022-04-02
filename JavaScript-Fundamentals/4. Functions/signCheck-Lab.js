function solve(firstNum, secondNum, thirdNum) {

if ( firstNum < 0 && secondNum < 0 && thirdNum >= 0) {
    return 'Positive';
} else if (firstNum < 0 && secondNum >= 0 && thirdNum < 0) {
    return 'Positive';
} else if (firstNum < 0 && secondNum >= 0 && thirdNum >= 0) {
    return 'Postiive';
} else {
    return 'Negative'
}



}

solve(5,
    12,
    -15)