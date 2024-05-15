const secretNumber = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreInput = document.querySelector(".score");
const highScoreInput = document.querySelector(".highscore");
const againBtn = document.querySelector('.again');


let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

checkBtn.addEventListener("click", function () {
    if (Number(guess.value) > randomNumber) {
        message.textContent = "Too High";
        if (score > 1) {
            score--;
            scoreInput.textContent = score;
        } else {
            scoreInput.textContent = 0;
            message.textContent = "You Lost the match";
        }
    } else if (Number(guess.value) < randomNumber) {
        message.textContent = "Too Low";
        if (score > 1) {
            score--;
            scoreInput.textContent = score;
        } else {
            scoreInput.textContent = 0;
            message.textContent = "You Lost the match";
        }
    } else if (Number(guess.value) == randomNumber) {
        document.querySelector("body").style.backgroundColor = "green";
        secretNumber.textContent = randomNumber;
        message.textContent = "You win the match";
        if (score > highScore) {
            highScore = score;
        }
        highScoreInput.textContent = highScore;
    }
});


againBtn.addEventListener('click', newGame);

function newGame() {
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    secretNumber.textContent = '?';
    document.body.style.backgroundColor = '#222';
    message.textContent = "Start guessing...";
    scoreInput.textContent = 20;
    guess.value = ''
}