const field = document.querySelector(".field");
const clicksScore = document.querySelector(".stats-clicks");
const timeScore = document.querySelector(".stats-time");
let gameStarted = false;

let game = {
  timeLeft: 10,
  clicks: 0
}

function update() {
  timeScore.innerText = game.timeLeft;
  clicksScore.innerText = game.clicks;
}

function reset() {
  game.clicks = 0;
  game.timeLeft = 11;
}

function endGame() {
  alert("Your score is: " + game.clicks / 10 + " CPS");
  reset();
  gameStarted = false;
}

function startGame() {
  gameStarted = true;
  let timeInterval = setInterval(function () {
    if (game.timeLeft === 0) {
      clearInterval(timeInterval)
      update()
      endGame();
    }
    game.timeLeft--;
    update();
  }, 1000);
}

field.addEventListener("click", function() {
  if (gameStarted) {
    game.clicks++;
    update();
  } else {
    startGame();
  }
})
