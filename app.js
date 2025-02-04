let userScore = 0;
let computerScore = 0;

// Buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Score elements
const userScoreElement = document.getElementById("userScore");
const computerScoreElement = document.getElementById("computerScore");
const resultElement = document.getElementById("result");
const userChoiceEmoji = document.getElementById("userChoiceEmoji");
const computerChoiceEmoji = document.getElementById("computerChoiceEmoji");
const gameResult = document.getElementById("gameResult");

// Emojis for each choice
const emojis = {
    rock: "🪨",  // Rock
    paper: "📄",  // Paper
    scissors: "✂️" // Scissors
};

// Computer choice function
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

// Compare choices and update score
function playRound(userChoice, computerChoice) {
    // Show the emojis for both user and computer
    userChoiceEmoji.textContent = `You chose: ${emojis[userChoice]}`;
    computerChoiceEmoji.textContent = `Computer chose: ${emojis[computerChoice]}`;

    // Determine the winner
    if (userChoice === computerChoice) {
        gameResult.textContent = `It's a draw! You both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        gameResult.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        gameResult.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }

    // Update the scores
    updateScore();
}

// Update the score display
function updateScore() {
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
}

// Event listeners for the buttons
rockButton.addEventListener('click', () => {
    const userChoice = 'rock';
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
});

paperButton.addEventListener('click', () => {
    const userChoice = 'paper';
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
});

scissorsButton.addEventListener('click', () => {
    const userChoice = 'scissors';
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
});
