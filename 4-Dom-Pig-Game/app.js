/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//
// ─── GLOBAL VARIABLES ───────────────────────────────────────────────────────────
//
var scores, roundScore, activePlayer, gamePlaying, lastRoll, winningScore;

init();


document.querySelector('.btn-roll').addEventListener('click', function () {
    "Use Strict:";
    if (gamePlaying) {

<<<<<<< HEAD
        var dice1 = Math.floor(Math.random() * 6) + 1;
=======
        var dice = Math.floor(Math.random() * 6) + 1;
>>>>>>> fa30103ba04948594807b41d549cc4c6c6d5f627
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //Display result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        var diceDOM2 = document.querySelector('.dice2');
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + dice2 + '.png';

<<<<<<< HEAD
        //Update the round score if the rolled number was not a 1.
        if (dice1 !== 1 || dice2 !== 1) {
            //Add Score
            roundScore += dice1;
=======
        if (dice === 6 && lastRoll === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        } else if (dice !== 1 && dice2 !== 1) {
            //Add Score
            roundScore += dice + dice2;
            lastRoll = dice
>>>>>>> fa30103ba04948594807b41d549cc4c6c6d5f627
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                nextPlayer();
            }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    "Use Strict:";
    //check if a game is currently being played
    if (gamePlaying) {

        //Add current score to player score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
}
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    "Use Strict:";
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    winningScore = document.getElementById("winning-score").value;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('name-0').textContent = 'Player 1';
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
    //Next player
    document.querySelector('#current-' + activePlayer).textContent = 0;

    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    lastRoll = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    //document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}








/*
document.querySelector('.btn-hold').addEventListener('click', function () {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).innerHTML = scores[activePlayer];

    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = 0;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
});
*/

/* 
THE 3 CHALLENGES.

1. A Player looses his entire score when he rolls two 6 in a row. After that, its the next player's
turn. (Hint: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score,
so that they change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript.
This is a good opportunity to use google to figure this out.)

3. Add another dice to the game, so that there are two dices now. The player losses his current score
when one of them is a 1 (Hint: you will need CSS to postion the second dice, so take a look at CSS code
for the first one.)
*/

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;
//console.log(x);