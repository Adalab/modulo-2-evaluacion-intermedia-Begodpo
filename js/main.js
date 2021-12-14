'use strict';

const movements = document.querySelector('.js-moveSelected');
const ComputerBtn = document.querySelector('.js-computerButton');
const messageButton = document.querySelector('.js-messageButton');
const playerAcc = document.querySelector('.js-playerAccount');
const computerAcc = document.querySelector('.js-computerAccount');

let moveComputer = ''; 



function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function getMoveComputer() {
    const randomNum = getRandomNumber(9);
    console.log({randomNum});       
    
    if(randomNum < 3) {
        moveComputer = 'piedra';    
    } else if(randomNum === 3 || randomNum < 6) {
        moveComputer = 'papel';
    } else {
        moveComputer = 'tijera';
    }
}      

function compareMovements() {
    const userValue = movements.value;
    console.log(userValue); 
    console.log(moveComputer);   

    if(userValue === moveComputer){
        messageButton.innerHTML = 'Empate';
    } else if( userValue === 'stone' && moveComputer === 'papel') {
        messageButton.innerHTML = '¡Has perdido!';
    } else if( userValue === 'stone' && moveComputer === 'tijera') {
        messageButton.innerHTML = '¡Has ganado!';
    } else if( userValue === 'paper' && moveComputer === 'piedra') {
        messageButton.innerHTML = '¡Has ganado!';
    } else if( userValue === 'paper' && moveComputer === 'tijera') {
        messageButton.innerHTML = '¡Has perdido!';
    } else if( userValue === 'scissors' && moveComputer === 'piedra') {
        messageButton.innerHTML = '¡Has perdido!';
    } else if( userValue === 'scissors' && moveComputer === 'papel') {
        messageButton.innerHTML = '¡Has ganado!'; 
    }      
}  

function updateCounter() {

}
   
   
function handleClickPlay(event) {   
    event.preventDefault();
    getRandomNumber();    
    getMoveComputer();
    compareMovements();
    updateCounter();    
}

ComputerBtn.addEventListener('click', handleClickPlay);