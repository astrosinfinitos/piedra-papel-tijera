import { resetBorder } from "./modules/resetBorder.js";

const OPCIONES = ["rock", "paper", "scissors"]; /* Cargamos todas las OPCIONES disponibles */
let playerSelection;
let cpuSelection;

const [rockButton, paperButton, scissorsButton] = /* Seleccionamos la clase player dentro del elemento button */
    document.querySelectorAll(".player > button");
const cpuImage = document.querySelector(".cpu img"); /* Con esta línea cargamos la imagen */
const result = document.querySelector(".result");

const onButtonPressed = (index, button) => {
  resetBorder();
  playerSelection = choosePlayerOption(index);
  button.classList.add("selected");
  cpuSelection = chooseCPUOption();
  checkWinner();
};

/* Estos eventos controlan cuando eliges una funcion */
rockButton.addEventListener("click", () => onButtonPressed(0, rockButton));
paperButton.addEventListener("click", () => onButtonPressed(1, paperButton));
scissorsButton.addEventListener("click", () => onButtonPressed(2, scissorsButton));

/* Retornamos la opción que haya escogido el usuario */
const choosePlayerOption = (index) => OPCIONES[index];

/* Esta funcion selecciona la imagen de lo que haya elegido la CPU */
const chooseCPUOption = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  const imageName = OPCIONES[randomIndex];
  cpuImage.src = "images/" + imageName + ".png";
  return OPCIONES[randomIndex];
};

/* Esta función contempla todas las OPCIONES disponibles del juego, pero es muy larga. ¿Puedes reducirla? */
const checkWinner = () => {
    let gameResult; 
    // Caso de empate
    if (cpuSelection === playerSelection ) { /* Caso de empate */
        result.textContent = "Has empatado";
    } 
    //Caso de empate
    if(cpuSelection === playerSelection){ 
        result.textContent = `Has empatado`;
    } else if(playerSelection == 'scissors' && cpuSelection=='paper' || playerSelection == 'paper' && cpuSelection=='rock' || playerSelection == 'rock' && cpuSelection=='scissors'){
        result.textContent = `Has ganado`;
      }else{
        result.textContent = `Has perdido`;
       }
};

