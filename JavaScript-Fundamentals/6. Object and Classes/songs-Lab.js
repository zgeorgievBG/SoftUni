function solve(arr) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        print() {
            console.log(`${this.name}`)
        }
    }

    const rotations = arr.shift();
    const typeOfTheList = arr.pop();

    arr.map(el => {
        const [type, name, time] = el.split('_');
        
        if(type == typeOfTheList || typeOfTheList == 'all') {
            const newSong = new Song(type, name, time);
            newSong.print();
        }
    })


}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])