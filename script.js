let userScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
const emojis = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};
const choiceButtons = document.querySelectorAll(".choice");
const userScoreDisplay = document.getElementById("userScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultDisplay = document.getElementById("result");
const messageDisplay = document.getElementById("message");
const userChoiceDisplay = document.getElementById("userChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const restartButton = document.getElementById("restartButton");
function playGame(userChoice) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    userChoiceDisplay.textContent = emojis[userChoice];
    computerChoiceDisplay.textContent = emojis[computerChoice];
    if (userChoice === computerChoice) {
        resultDisplay.textContent = "🤝 It's a Draw!";
        messageDisplay.textContent =
            "Both selected " + userChoice + ". Try again!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        resultDisplay.textContent = "🎉 You Win!";
        messageDisplay.textContent =
            "Great job! " + userChoice + " beats " + computerChoice + ".";
    } else {
        computerScore++;
        resultDisplay.textContent = "😢 You Lose!";
        messageDisplay.textContent =
            "Computer wins! " + computerChoice + " beats " + userChoice + ".";
    }
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}
choiceButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const userChoice = button.dataset.choice;
        playGame(userChoice);
    });

});
restartButton.addEventListener("click", function() {
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    resultDisplay.textContent = "Let's Play!";
    messageDisplay.textContent =
        "Select Rock, Paper, or Scissors to start.";
    userChoiceDisplay.textContent = "❔";
    computerChoiceDisplay.textContent = "❔";
});
