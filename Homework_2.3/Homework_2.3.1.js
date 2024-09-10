const players = [
    {
    "id": 1,
    "name": "Ivan",
    "scorePoints": 4500
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
    ]

let scores = [];
for (let index in players) {
  scores.push(players[index].scorePoints);
}
console.log(scores);

let maxScorePlayer = null;
for (let player of players) {
  if (player.scorePoints === Math.max(...scores)) {
    maxScorePlayer = player;
  }
}
console.log(`Игрок с максимальным количеством очков`, maxScorePlayer);
