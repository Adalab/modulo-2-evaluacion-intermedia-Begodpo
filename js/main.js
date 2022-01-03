"use strict";

const movements = document.querySelector(".js-moveSelected");
const ComputerBtn = document.querySelector(".js-computerButton");
const messageButton = document.querySelector(".js-messageButton");
const playerAcc = document.querySelector(".js-playerAccount");
const computerAcc = document.querySelector(".js-computerAccount");
const reset = document.querySelector(".js-reset");

// Variables globales
let moveComputer = "";
let userScore = 0;
let computerScore = 0;
let moves = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// Mostar el resultado: texto y puntuación

// Generar la jugada aleatoria

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

// Comparar jugadas y ver quién ha ganado

function compareMovements() {
  let moveComputer = getMoveComputer();
  let userValue = movements.value;
  console.log(moveComputer);

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
  console.log(moves);
}

function gameOver() {
  if (moves === 10) {
    if (userScore > computerScore) {
      messageButton.innerHTML = "¡Has ganado la partida!";
    } else if (userScore > computerScore) {
      messageButton.innerHTML = "¡Has perdido la partida!";
      messageButton.innerHTML = "¡Empate!";
    }
    reset.classList.remove("hidden");
  }
}

function handleClickPlay(event) {
  event.preventDefault();
  compareMovements();
  gameOver();
}

ComputerBtn.addEventListener("click", handleClickPlay);
