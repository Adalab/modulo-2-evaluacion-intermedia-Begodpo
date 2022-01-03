"use strict";

const movements = document.querySelector(".js-moveSelected");
const computerBtn = document.querySelector(".js-computerButton");
const messageButton = document.querySelector(".js-messageButton");
const playerAcc = document.querySelector(".js-playerAccount");
const computerAcc = document.querySelector(".js-computerAccount");
const resetBtn = document.querySelector(".js-reset");
const computerText = document.querySelector(".js-computerText");

// Variables globales
let moveComputer = "";
let userScore = 0;
let computerScore = 0;
let moves = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Jugada aleatoria

function getMoveComputer() {
  let randomNum = getRandomNumber(9);
  if (randomNum < 3) {
    moveComputer = "piedra";
  } else if (randomNum === 3 || randomNum < 6) {
    moveComputer = "papel";
  } else {
    moveComputer = "tijera";
  }
  return moveComputer;
}

// Comparar jugadas

function compareMovements() {
  let moveComputer = getMoveComputer();
  let userValue = movements.value;

  if (userValue === moveComputer) {
    messageButton.innerHTML = "Empate";
  } else if (userValue === "piedra" && moveComputer === "papel") {
    messageButton.innerHTML = "¡Has perdido!";
    computerScore++;
  } else if (userValue === "piedra" && moveComputer === "tijera") {
    messageButton.innerHTML = "¡Has ganado!";
    userScore++;
  } else if (userValue === "papel" && moveComputer === "piedra") {
    messageButton.innerHTML = "¡Has ganado!";
    userScore++;
  } else if (userValue === "papel" && moveComputer === "tijera") {
    messageButton.innerHTML = "¡Has perdido!";
    computerScore++;
  } else if (userValue === "tijera" && moveComputer === "piedra") {
    messageButton.innerHTML = "¡Has perdido!";
    computerScore++;
  } else if (userValue === "tijera" && moveComputer === "papel") {
    messageButton.innerHTML = "¡Has ganado!";
    userScore++;
  }

  playerAcc.innerHTML = `Jugador: <span>${userScore}</span>`;
  computerAcc.innerHTML = `Computadora: <span>${computerScore}</span>`;

  moves++;
  computerText.innerHTML = `La computadora ha elegido: ${moveComputer}`;
}
// Fin de la partida

function gameOver() {
  if (moves === 10) {
    if (userScore > computerScore) {
      messageButton.innerHTML = "¡Has ganado la partida!";
    } else if (userScore > computerScore) {
      messageButton.innerHTML = "¡Has perdido la partida!";
      messageButton.innerHTML = "¡Empate!";
    }
    resetBtn.classList.remove("hidden");
    computerBtn.classList.add("hidden");
  }
}

function handleClickPlay(event) {
  event.preventDefault();
  compareMovements();
  gameOver();
}

function handleClickReset(event) {
  event.preventDefault();
  resetBtn.classList.add("hidden");
  computerBtn.classList.remove("hidden");
  userScore = 0;
  computerScore = 0;
  moves = 0;
  playerAcc.innerHTML = `Jugador: <span>0</span>`;
  computerAcc.innerHTML = `Computadora: <span>0</span>`;
  messageButton.innerHTML = "Vamos a jugar!";
  document.getElementById("move_selected").value = "move";
}

computerBtn.addEventListener("click", handleClickPlay);
resetBtn.addEventListener("click", handleClickReset);
