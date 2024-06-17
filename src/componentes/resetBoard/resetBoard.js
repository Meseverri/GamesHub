export const resetBoard=(boardClass,turntxt)=>{
    const reiniciar$$ = document.createElement("p");
    reiniciar$$.innerHTML = `<strong>Reiniciar partida</strong>`;
    reiniciar$$.addEventListener("click", () => {
      const tablero = document.querySelector(".tableroContenedor");
      turno$$.innerHTML = `Turno de <strong class="turn">X</strong>`;
      tablero.childNodes[0].remove();
      //Game section > board container > board
      tablero.append(TTTboard(9, scoreObj));
      scoreObj.updated = false;
    });
  
}