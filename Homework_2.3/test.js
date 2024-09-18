
// let obj = { a: 1, b: 2, c: 3 }

// for(elementKey in obj) {
// console.log(`value is ${obj[elementKey]}`)
// console.log(`element key is ${elementKey}`)
// }

const players = [
    {
    "id": 1,
    "name": "Ivan",
    "scorePoints": 400
    },
    {
    "id": 2,
    "name": "Petr",
    "scorePoints": 3600
    },
    {
    "id": 3,
    "name": "Vadim",
    "scorePoints": 3433
    },
    {
    "id": 4,
    "name": "Olga",
    "scorePoints": 2356
    },
    
    ];
    
let arrScores = [];

for(player in players) {
    arrScores.push(players[player].scorePoints)
}

let maxIndex = (arrScores.indexOf(Math.max (...arrScores)))
console.log(` ${players[maxIndex].name} has max Score`)