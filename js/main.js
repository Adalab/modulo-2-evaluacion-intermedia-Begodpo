"use strict";

const movements = document.querySelector(".js-moveSelected");
const ComputerBtn = document.querySelector(".js-computerButton");
const messageButton = document.querySelector(".js-messageButton");
const playerAcc = document.querySelector(".js-playerAccount");
const computerAcc = document.querySelector(".js-computerAccount");

let moveComputer = "";

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
  } else if (userValue === "piedra" && moveComputer === "tijera") {
    messageButton.innerHTML = "¡Has ganado!";
  } else if (userValue === "papel" && moveComputer === "piedra") {
    messageButton.innerHTML = "¡Has ganado!";
  } else if (userValue === "papel" && moveComputer === "tijera") {
    messageButton.innerHTML = "¡Has perdido!";
  } else if (userValue === "tijera" && moveComputer === "piedra") {
    messageButton.innerHTML = "¡Has perdido!";
  } else if (userValue === "tijera" && moveComputer === "papel") {
    messageButton.innerHTML = "¡Has ganado!";
  }
}

function updateCounter() {}

function handleClickPlay(event) {
  event.preventDefault();
  compareMovements();
}

ComputerBtn.addEventListener("click", handleClickPlay);
