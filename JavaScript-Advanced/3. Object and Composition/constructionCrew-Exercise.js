function solve(workerInfo) {

    if(workerInfo.dizziness == true) {
        workerInfo.levelOfHydrated += workerInfo.weight * workerInfo.experience * 0.1;
        workerInfo.dizziness = false;
    }

    console.log(workerInfo)
    return workerInfo;
}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });

    solve({ weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true })