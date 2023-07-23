// Game function
function game() {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    function startgame() {
        const playBtn = document.querySelector(".playBtn");
        const hideIntro = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            hideIntro.classList.add('hidden');
            match.classList.remove("hidden")
            match.classList.add("visible");
        });
    }

    // Play Match
    const playMatch = () => {
        // Selectors
        const options = document.querySelectorAll(".options button")
        const playerHand = document.querySelector(".player-hand")
        const computerHand = document.querySelector(".computer-hand")
        //computer option
        const computerOptions = ["rock", "paper", "scissors"]

        options.forEach((option) => {

            // Find random number
            const computerChoiseIndex = Math.floor(Math.random() * 3);
            // Find which option computer select
            const computerOption = computerOptions[computerChoiseIndex];
        
            option.addEventListener("click", () => {

                setTimeout(()=>{
                // function for matching hands
                compareHands(option.innerText, computerOption);
                // Set the variable attribute of Image
                computerHand.setAttribute('src', `Images/${computerOption}.png`)
                playerHand.setAttribute('src', `Images/${option.innerText}.png`)
            },500)
            })

            // Function for Update Score
            function updateScore(){
                const playerScore = document.querySelector(".player-score p");
                const computerScore = document.querySelector(".computer-score p");
                playerScore.innerText = pScore;
                computerScore.innerText = cScore; 
            }
            // function for matching hands
            function compareHands(playerChoice, computerChoice) {
                const winner = document.querySelector(".winner")
                // check for a tie
                if (playerChoice === computerChoice) {
                    winner.innerText = "Its a Tie";
                    return;
                }
                // check for rock win
                if (playerChoice === "rock") {
                    if (computerChoice === "scissor") {
                        winner.innerText = "Player Wins";
                        pScore++;
                        updateScore();
                        return;
                    } else {
                        winner.innerText = "Computer Wins";
                        cScore++;
                        updateScore();
                        return;
                    }
                }
                //Check for Paper win
                if (playerChoice === "paper") {
                    if (computerChoice === "scissors") {
                        winner.innerText = "Computer Wins";
                        cScore++;
                        updateScore();
                        return;
                    } else {
                        winner.innerText = "Player Wins";
                        pScore++;
                        updateScore();
                        return;
                    }
                }
                //Check for Scissors wins
                if (playerChoice === "scissors") {
                    if (computerChoice === "rock") {
                        winner.innerText = "Computer Wins";
                        cScore++;
                        updateScore();
                        return;
                    } else {
                        winner.innerText = "Player Wins";
                        pScore++;
                        updateScore();
                        return;
                    }
                }
            }
        })

    }
    // Inside Initial run
    startgame();
    playMatch()
}

// Initial Game Run
game();
