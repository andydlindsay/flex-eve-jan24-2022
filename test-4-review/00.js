"use strict";

/* Question 00

Given a collection of game outcome records, determine who all the players are by returning an array of their names.

The array should be ordered by how the names are encountered.

Example Input:

[
  { winner: 'Alishah', loser: 'Bob',    loser_points: 3 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 1 },
  { winner: 'Elise',   loser: 'Bob',    loser_points: 2 },
  { winner: 'Elise',   loser: 'Maria',  loser_points: 4 },
  { winner: 'Alishah', loser: 'Maria',  loser_points: 2 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 3 },
  { winner: 'Xu Jin',  loser: 'Elise',  loser_points: 2 }
]

Expected Result:

['Alishah', 'Bob', 'Maria', 'Xu Jin', 'Elise']

*/


const allPlayerNames = function(outcomes) {
  // IMPLEMENT ME

  // create an array for the player's names
  const players = [];

  // iterate through the array
  for (const outcome of outcomes) {
    // console.log(outcome);
    const winner = outcome.winner;
    const loser = outcome.loser;

    if (!players.includes(winner)) {
      players.push(winner);
    }

    if (!players.includes(loser)) {
      players.push(loser);
    }

    // console.log(winner, loser);
  }

  // return the array
  return players;
};


// Don't change below:
module.exports = { allPlayerNames };
