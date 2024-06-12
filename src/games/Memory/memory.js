import { icon } from "../../componentes/icon/icon";
import { arrowNoFill } from "../../data/imgSrc";
import { backInit } from "../../events/events";

import { init } from "../../init/initView";

export const Mgame = () => {
  const app$$ = document.querySelector("#app");
  app$$.innerHTML = "";
  const icon$$ = icon("return-icon",arrowNoFill);

  icon$$.addEventListener("click", backInit);


  app$$.append(icon$$);
};


const Mboard =  (dim) => {
    const tablero = document.createElement("div");
    tablero.classList.add("tablero");
    let vertical = 0;
    let horizontal = 0;
    let turn = 0;
    for (let i = 0; i < dim; i++) {
      const casilla = document.createElement("div");
      casilla.classList.add("casilla");
      casilla.dataset.coordenada = `${vertical},${horizontal}`;
  
      horizontal += 1;
      if (horizontal === 3) {
        horizontal = 0;
        vertical += 1;
      }
  
      casilla.addEventListener("click", (event) => { });
      tablero.appendChild(casilla);
    }
  
    return tablero;
}