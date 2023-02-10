//Solution 1:
//TIME: O(n) - going through array once
//SPACE: O(k + 1) = O(k) - let winner = {score: 0, name: ''}. name being k and the score being + 1. But it just goes down to O(k).
function tournamentWinner(competitions, results) {
  let winner = { score: 0, name: "" };
  const scoreMap = {};

  for (var i = 0; i < competitions.length; i++) {
    let homeTeam = competitions[i][0];
    let awayTeam = competitions[i][1];

    if (results[i] === 0) {
      !scoreMap[awayTeam]
        ? (scoreMap[awayTeam] = 3)
        : (scoreMap[awayTeam] += 3);
    } else {
      !scoreMap[homeTeam]
        ? (scoreMap[homeTeam] = 3)
        : (scoreMap[homeTeam] += 3);
    }

    if (scoreMap[awayTeam] >= winner.score) {
      winner = { score: scoreMap[awayTeam], name: awayTeam };
    } else if (scoreMap[homeTeam] >= winner.score) {
      winner = { score: scoreMap[homeTeam], name: homeTeam };
    }
  }

  return winner.name;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;

//homeTeam  ,  awayTeam
//  1             0
