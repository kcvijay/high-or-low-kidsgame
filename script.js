const mainContainer = document.querySelector(".main-container");
const imgBtnUp = document.querySelector(".img-btn-up");
const imgBtnDown = document.querySelector(".img-btn-down");
const imgBtnEqual = document.querySelector(".img-btn-equal");
const guessOne = document.querySelector(".guess-box-one");
const guessTwo = document.querySelector(".guess-box-two");

const gameOver = document.querySelector(".game-over");
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

//On up/down/equal button click, generate random numbers on both number boxes.
imgBtnUp.addEventListener("click", () => {
  if (guessTwo.innerHTML > guessOne.innerHTML) {
    scoreAdd();
  } else {
    failInit();
  }

  guessOne.innerHTML = getRandom(101);
  guessTwo.innerHTML = getRandom(101);
});

imgBtnDown.addEventListener("click", () => {
  if (guessTwo.innerHTML < guessOne.innerHTML) {
    scoreAdd();
  } else {
    failInit();
  }

  guessOne.innerHTML = getRandom(101);
  guessTwo.innerHTML = getRandom(101);
});

imgBtnEqual.addEventListener("click", () => {
  if (guessTwo.innerHTML === guessOne.innerHTML) {
    scoreAdd();
  } else {
    failInit();
  }

  guessOne.innerHTML = getRandom(101);
  guessTwo.innerHTML = getRandom(101);
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

function failInit() {
  scoreTxt.innerHTML = 0;
  lastScore.innerHTML = score;
  gameOver.style.display = "flex";
  mainContainer.style.display = "none";
}

function scoreAdd() {
  score += 1;
  scoreTxt.innerHTML = score;
}

//Timer function
function countdownTimer() {
  let timeleft = 60;
  const countdown = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(countdown);
      timerTxt.innerHTML = "Time is up";
    } else {
      remainingTime.innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);
}

/*function startInit() {
  gameOver.style.display = "none";
  scoreTxt.innerHTML = 0;
  mainContainer.style.display = "block";
}*/
