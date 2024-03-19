/*
For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) 
got in the championship by the rules given above.
*/

const games1 = ["1:0","2:0","3:6","4:5","2:1","3:3","4:4","3:2","4:2","4:3"]
function points(games) {
    const totalPointsWins = games.filter((games) => {
        const [x, y] = games.split(':').map(Number);
        const winGames = x > y ? games : null;
        return winGames;
    });
    const totalPointsDraw = games.filter((games) => {
        const [x, y] = games.split(':').map(Number);
        const drawGames = x === y ? games : null;
        return drawGames;
    })
        
    
    const winPoints = totalPointsWins.length * 3;
    const drawnPoints = totalPointsDraw.length;
    const totalPoints = winPoints + drawnPoints;
    
    return totalPoints
}


console.log(points(games1));




