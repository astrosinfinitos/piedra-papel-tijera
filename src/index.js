/*
Desafío: 
Este código tiene demasiadas líneas. 
El servidor de producción está petado.
¿Qué harás para reducir el número de líneas de este programa?
Aquí, tu compi junior Isma te ha dado una pista.
https://dmitripavlutin.com/access-object-properties-javascript/
*/

const opciones = ['rock', 'paper', 'scissors']; /*Cargamos todas las opciones disponibles*/
let playerSelection;
let cpuSelection;

const [rockButton, paperButton, scissorsButton] = /*Seleccionamos la clase player dentro del elemento button*/
    document.querySelectorAll(".player > button");
const cpuImage = document.querySelector('.cpu img'); /*Con esta línea cargamos la imagen */
const result = document.querySelector('.result');

rockButton.addEventListener('click', () => { /*Este evento controla cuando pulsamos la opción piedra*/
    resetBorder()
    playerSelection = choosePlayerOption(0);
    rockButton.classList.add('selected');
    cpuSelection = chooseCPUOption();
    show()
});

paperButton.addEventListener('click', () => { /*Este evento controla cuando pulsamos la opción papel*/
    resetBorder()
    playerSelection = choosePlayerOption(1);
    paperButton.classList.add('selected');
    cpuSelection = chooseCPUOption();
    show()
});

scissorsButton.addEventListener('click', () => { /*Este evento controla cuando pulsamos la opción tijeras*/
    resetBorder()
    playerSelection = choosePlayerOption(2);
    scissorsButton.classList.add('selected');
    cpuSelection = chooseCPUOption();
    show()
});

function choosePlayerOption(index){ /*Retornamos la opción que haya escogido el usuario*/
    return opciones[index];
}

function chooseCPUOption(){ /*Esta funcion selecciona la imagen de lo que haya elegido la CPU*/
   const randomIndex = Math.floor(Math.random() * 3);
   const imageName = opciones[randomIndex];
   cpuImage.src = 'images/'+imageName+ '.png'
   return opciones[randomIndex];
}

function show(){ /*Esta función contempla todas las opciones disponibles del juego, pero es muy larga. ¿Puedes reducirla?*/
    let gameResult; 
    //Caso de empate
    if(cpuSelection === playerSelection){ 
        result.textContent = `Has empatado`;
    } else if(playerSelection == 'scissors' && cpuSelection=='paper' || playerSelection == 'paper' && cpuSelection=='rock' || playerSelection == 'rock' && cpuSelection=='scissors'){
            result.textContent = `Has ganado`;
      }else{
        result.textContent = `Has perdido`;
       }
}


function resetBorder(){ /*Esta función quitará los estilos de los botones */
    paperButton.classList.remove('selected');
    scissorsButton.classList.remove('selected');
    rockButton.classList.remove('selected');
}
