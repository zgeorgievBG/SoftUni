function solve(percent) {

    if (percent == 100) {
        console.log(`100% Complete! \n[%%%%%%%%%%]`);
    } else {
        let result = calculatingPercent(percent);
        console.log(result);
    }

    function calculatingPercent(n) {
        let progression = Number(n/10);
        let remaining = Number(100 - n)/10;
        return `${n}% [${"%".repeat(progression)}${".".repeat(remaining)}]\nStill loading...`;
    }
}

solve(30)