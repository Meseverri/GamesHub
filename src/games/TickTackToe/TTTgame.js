import { icon } from "../../componentes/icon/icon";
import { arrowNoFill } from "../../data/imgSrc";
import { backInit } from "../../events/events";
import "./TTTgame.css";

export const TTTgame = () => {
  const app$$ = document.querySelector("#app");
  app$$.innerHTML = "";
  const icon$$ = icon("return-icon", arrowNoFill);
  icon$$.addEventListener("click", backInit);

  app$$.append(icon$$);
  const section$$ = document.createElement("section");

  section$$.append(TTTscore());
  const turno$$ = document.createElement("p");
  turno$$.classList.add("turnTxt")
  turno$$.innerHTML = `Turno de <strong class="turn">X</strong>`;

  section$$.append(turno$$);
  const boardDiv$$=document.createElement("div");
  boardDiv$$.classList.add("tableroContenedor")


  boardDiv$$.append(TTTboard(9));
  section$$.append(boardDiv$$);
  
  const reiniciar$$ = document.createElement("p");
  
  reiniciar$$.innerHTML = `<strong>Reiniciar partida</strong>`;
  reiniciar$$.addEventListener("click",()=>{
    const tablero=document.querySelector(".tableroContenedor");
    const turnTxt=document.querySelector("p>.turn");
    turnTxt.innerText="X";
    tablero.childNodes[0].remove()
    tablero.append(TTTboard(9));
  })
  section$$.append(reiniciar$$);
  
  app$$.append(section$$);
};

const TTTboard = (dim) => {

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
    
    
    casilla.addEventListener("click", (event) => {
      const txt=document.querySelector(".turnTxt");
      const turnTxt=document.querySelector("p>.turn");

      if (turn === 1) {
        const target=event.target.innerText;
        if(!target) {

          turn=0;
          // turnTxt.innerText="X"
          event.target.innerText="O";
          txt.innerHTML=`Turno de <strong class="turn">X</strong>`
        };

      } else {
        const target=event.target.innerText;
        if(!target) {
          turn=1; 
          turnTxt.innerText="O"
          event.target.innerText="X";
          txt.innerHTML=`Turno de <strong class="turn">O</strong>`

        };
      }
      const winner=validarGanador(tablero)
      if (winner){
        console.log(winner)
        txt.innerHTML= `¡Ganador de la partida <strong class="turn">${winner}</strong>!`;
      }
    });
    tablero.appendChild(casilla);
  }

  return tablero;
};

const TTTscore = () => {
  const scoreBoard = document.createElement("div");
  scoreBoard.classList.add("scoreBoard");
  const Xscore = score("X", "-");
  const Oscore = score("O", "-");

  scoreBoard.appendChild(Xscore);
  scoreBoard.appendChild(Oscore);
  return scoreBoard;
};

const score = (txt, score) => {


  const score$$ = document.createElement("div");
  const p = document.createElement("p");
  p.innerText = txt;
  p.classList.add(txt);
  //Score element p
  
  const scoreP$$ = document.createElement("p");
  scoreP$$.innerText = score;
  scoreP$$.classList.add(`${txt}Score`);

  score$$.appendChild(p);
  score$$.appendChild(scoreP$$);
  return score$$;
};

const validarGanador=(tablero)=>  {
  // console.log(tablero)
  const tableChildren =tablero.childNodes;
  const lineasGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // console.log(tablero.childNodes)

  for (let i = 0; i < lineasGanadoras.length; i++) {
    const [a, b, c] = lineasGanadoras[i];
    if (tableChildren[a].innerText && tableChildren[a].innerText === tableChildren[b].innerText && tableChildren[a].innerText === tableChildren[c].innerText) {
      return tableChildren[a].innerText;
    }
  }
  return null;
}