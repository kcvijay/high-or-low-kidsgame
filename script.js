const mainContainer = document.querySelector(".main-container");

const reload = document.querySelector(".reload");

const imgBtnUp = document.querySelector(".img-btn-up");
const imgBtnDown = document.querySelector(".img-btn-down");
const imgBtnEqual = document.querySelector(".img-btn-equal");
const guessOne = document.querySelector(".guess-box-one");
const guessTwo = document.querySelector(".guess-box-two");

const gameOver = document.querySelector(".game-over");
const gameOverHeading = document.querySelector(".game-over-heading");
const playAgain = document.querySelector(".play-again");
const lastScore = document.querySelector(".last-score");

let scoreTxt = document.querySelector(".score-num");
let score = 0;

const timerTxt = document.querySelector(".timer");
const remainingTime = document.querySelector(".remaining-seconds");

//Random numbers on window loading.
window.addEventListener("load", () => {
  guessOne.innerHTML = getRandom(101);
  guessTwo.innerHTML = getRandom(101);
  countdownTimer();
});

//** Refreshing a game on reload button click */
reload.addEventListener("click", () => {
  location.reload();
});

//On up/down/equal button click, generate random numbers on both number boxes.
imgBtnUp.addEventListener("click", () => {
  if (guessTwo.innerHTML > guessOne.innerHTML) {
    scoreAdd();
    guessOne.innerHTML = getRandom(101);
    guessTwo.innerHTML = getRandom(101);
  } else {
    failInit();
  }
});

imgBtnDown.addEventListener("click", () => {
  if (guessTwo.innerHTML < guessOne.innerHTML) {
    scoreAdd();
    guessOne.innerHTML = getRandom(101);
    guessTwo.innerHTML = getRandom(101);
  } else {
    failInit();
  }
});

imgBtnEqual.addEventListener("click", () => {
  if (guessTwo.innerHTML === guessOne.innerHTML) {
    scoreAdd();
    guessOne.innerHTML = getRandom(101);
    guessTwo.innerHTML = getRandom(101);
  } else {
    failInit();
  }
});

playAgain.addEventListener("click", () => {
  mainContainer.style.display = "block";
  gameOver.style.display = "none";
  score = 0;
  location.reload();
});

//Re-usable functions
function getRandom(max) {
  return Math.floor(Math.random() * max);
}
getRandom();

function countdownTimer() {
  let timeleft = 59;
  const countdown = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(countdown);
      failInit();
      audioWrong.play();
      gameOverHeading.innerHTML = "OOOPS! Time is up.";
    } else {
      timerTxt.innerHTML = `Remaining time: ${timeleft} seconds`;
    }
    timeleft -= 1;
  }, 1000);
}

function failInit() {
  audioWrong.play();
  scoreTxt.innerHTML = 0;
  lastScore.innerHTML = score;
  gameOver.style.display = "flex";
  mainContainer.style.display = "none";
}

function scoreAdd() {
  score += 1;
  scoreTxt.innerHTML = score;
}

//play audio on wrong answer/timesup
let audioWrong = new Audio("/media/wrong-sound.wav");

console.log(
  `This is a simple High or Low game especially designed for kids learning the numbers.
  Instuction is simple: player presses either high, low or equal button for the number below in compare to the number above. For example, if the number above is 50 and below is 60, player presses "High" button. Time limit is 60 seconds.`
);
