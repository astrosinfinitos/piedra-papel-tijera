const [rockButton, paperButton, scissorsButton] = /* Seleccionamos la 
clase player dentro del elemento button */
    document.querySelectorAll(".player > button");

export const resetBorder = () => { /* Esta función quitará los estilos de 
los botones */
  paperButton.classList.remove("selected");
  scissorsButton.classList.remove("selected");
  rockButton.classList.remove("selected");
};
