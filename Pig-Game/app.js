/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score ,roundScore,activePlayer,gamePlaying ;
 init();

 document.querySelector('.btn-roll').addEventListener('click', ()=>{
     if(gamePlaying){

         //1. Generate Random Number Between 1-6

         var dice= Math.floor(Math.random() *6 ) +1;
        
         //2. Display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';

        //3. Changing the Dice Image 
        diceDom.src =`Photos/dice-${dice}.png `;

        //4. Update the round score If the rolled number was Not a 1
         
        if(dice !== 1){
             roundScore += dice;
             document.querySelector('#current-' + activePlayer).textContent = roundScore; // Use for showing Data in UI
            } else{
                // Set Global score to 0
                score[activePlayer] = 0 ;
                //Update in the UI
                document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

                nextPlayer();
            }

        }
    });

// Add The Hold button functionality and Show the Winner!!

document.querySelector('.btn-hold').addEventListener('click', ()=>{
    if(gamePlaying){
        //Add Current Score To Global Score
        score[activePlayer] += roundScore;

        //Update in the UI
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

        // Check if Player win the game
        if(score[activePlayer]>=100){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
        } else{
            //Next Player
            nextPlayer();
        
        }
        
    }
});


// Changing Active Players

function nextPlayer(){
    // Next Player
    activePlayer === 0 ?activePlayer = 1 : activePlayer = 0;
    roundScore=0;
   
    // Update all player value as 0 in starting
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Show Dice-1 for some seconds
    setTimeout(delay,400);  
     
    //  Toggle the Active (if Player-1 is active,remove active and add in Player-0)
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');
   // Hide the dice

   function delay(){
   document.querySelector('.dice').style.display = 'none';
   }
   
   
}


// Add Game Button
document.querySelector('.btn-new').addEventListener('click', init);



// Create a function, initialize the variables in it.

function init() {
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    //Set all score to 0.

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // For New Game 

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

