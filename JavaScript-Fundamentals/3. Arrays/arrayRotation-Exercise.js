function rotations(array, numberOfRotations) {


    for (let i = 0; i < numberOfRotations; i++) {
        array.push(array.shift());
    }
    console.log(array.join(' '));

}

rotations([51, 47, 32, 61, 21], 2);
rotations([32, 21, 61, 1], 4);