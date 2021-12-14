'use strict';

const movements = document.querySelector('.js-moveSelected');
const ComputerBtn = document.querySelector('.js-computerButton');
const messageButton = document.querySelector('.js-messageButton');
let moveComputer = ''; 



function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function getMoveComputer() {
    const randomNum = getRandomNumber(10);
    console.log({randomNum});       
    
    if(randomNum < 3 ) {
        moveComputer = 'piedra';    
    } else if(randomNum >= 3) {
        moveComputer = 'papel';
    } else {
        moveComputer = 'tijera';
    }
}      

function compareMovements() {
    const userValue = movements.value;
    if(userValue === moveComputer){
        messageButton.innerHTML = 'Empate';
    }
}
   
   
function handleClickPlay(event) {   
    event.preventDefault();
    getRandomNumber();    
    getMoveComputer();
    compareMovements();
    
}

ComputerBtn.addEventListener('click', handleClickPlay);  



