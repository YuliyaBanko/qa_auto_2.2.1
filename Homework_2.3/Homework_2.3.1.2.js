const players = [
    { id: 1, name: 'John', scorePoints: 5100 },
    { id: 2, name: 'Jane', scorePoints: 4700 },
    { id: 3, name: 'Jack', scorePoints: 4500 },
    { id: 4, name: 'Jill', scorePoints: 4300 },
    { id: 5, name: 'Jim', scorePoints: 4100 },
    { id: 6, name: 'Julia', scorePoints: 4000 },
    { id: 7, name: 'Jerry', scorePoints: 3800 },
    { id: 8, name: 'Jessica', scorePoints: 3700 },
    { id: 9, name: 'Jordan', scorePoints: 3600 },
    { id: 10, name: 'James', scorePoints: 3500 },
    { id: 11, name: 'Jasper', scorePoints: 3400 },
    { id: 12, name: 'Joan', scorePoints: 3300 },
    { id: 13, name: 'Johnathan', scorePoints: 3200 },
    { id: 14, name: 'Joyce', scorePoints: 3100 },
    { id: 15, name: 'Jeff', scorePoints: 3000 },
    { id: 16, name: 'June', scorePoints: 2900 },
    { id: 17, name: 'Jared', scorePoints: 2800 },
    { id: 18, name: 'Jenna', scorePoints: 2700 },
    { id: 19, name: 'Jesse', scorePoints: 2600 },
    { id: 20, name: 'Janet', scorePoints: 2500 }
  ];

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
