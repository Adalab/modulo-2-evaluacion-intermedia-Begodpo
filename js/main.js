'use strict';

const movements = document.querySelector('.js-moveSelected');
const ComputerBtn = document.querySelector('.js-computerButton');
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
   
   
   
function handleClickPlay(event) {   
    event.preventDefault();
    getRandomNumber();    
    getMoveComputer();
    
}

ComputerBtn.addEventListener('click', handleClickPlay);  



