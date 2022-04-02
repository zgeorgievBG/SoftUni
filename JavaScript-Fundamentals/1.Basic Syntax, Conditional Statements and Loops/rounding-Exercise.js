function roundNumber ( number, precission) {
    precission = precission > 15 ? 15 : precission;
    result = number.toFixed(precission);
    console.log(parseFloat(result))
}

roundNumber(3.1415926535897932384626433832795,2)
roundNumber(10.5,3)