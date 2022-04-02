function solution(array, command) {



const commandsObj = {
    asc: () => {
        array.sort((a, b) => a - b);
    },
    desc: () => {
        array.sort((a, b) => b - a);
    }
}

commandsObj[command]();

return array;
}

solution([14, 7, 17, 6, 8], 'desc');
