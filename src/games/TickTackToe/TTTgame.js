import { icon } from "../../componentes/icon/icon";
import { scoreBoard,score } from "../../componentes/scoreBoard/scoreBoard";
import { arrowNoFill } from "../../data/imgSrc";
import { backInit } from "../../events/events";
import "./TTTgame.css";

export const TTTgame = () => {
  //Back to main menu
  const app$$ = document.querySelector("#app");
  app$$.innerHTML = "";
  const icon$$ = icon("return-icon", arrowNoFill);
  icon$$.addEventListener("click", backInit);
  app$$.append(icon$$);
  //Game section
  const section$$ = document.createElement("section");
  // section$$.classList.add("TTTsection")
  //Game section > score board
  const scoreObj = {
    updated: false,
    X: 0,
    O: 0,
  };
  
  // section$$.append(TTTscore());
  section$$.append(scoreBoard());
  //Game section > turn to play and winner 
  const turno$$ = document.createElement("p");
  turno$$.classList.add("turnTxt");
  turno$$.innerHTML = `Turno de <strong class="turn">X</strong>`;
  section$$.append(turno$$);
  //Game section> board container
  const boardDiv$$ = document.createElement("div");
  boardDiv$$.classList.add("tableroContenedor");
  //Game section > board container > board
  boardDiv$$.append(TTTboard(9, scoreObj));
  section$$.append(boardDiv$$);
  //Game section > reset board
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

  section$$.append(reiniciar$$);
  app$$.append(section$$);
};

const TTTboard = (dim, scoreObj) => {
  //creating main container
  const tablero = document.createElement("div");
  tablero.classList.add("tablero");

  let turn = 0;
  for (let i = 0; i < dim; i++) {
    const casilla = document.createElement("div");
    casilla.classList.add("casilla");
    //Click event on board
    casilla.addEventListener("click", (event) => {
      const txt = document.querySelector(".turnTxt");
      const turnTxt = document.querySelector("p>.turn");
      if (!scoreObj.updated) {
        if (turn === 1) {
          const target = event.target.innerText;
          if (!target) {
            turn = 0;
            event.target.innerText = "O";
            txt.innerHTML = `Turno de <strong class="turn">X</strong>`;
          }
        } else {
          const target = event.target.innerText;
          if (!target) {
            turn = 1;
            turnTxt.innerText = "O";
            event.target.innerText = "X";
            txt.innerHTML = `Turno de <strong class="turn">O</strong>`;
          }
        }
      }
      const winner = validarGanador(tablero);
      if (winner && !scoreObj.updated) {
        scoreObj.updated = true;
        console.log(winner);
        scoreObj[winner] += 1;
        score(winner, scoreObj[winner]);
        txt.innerHTML = `¡Ganador de la partida <strong class="turn">${winner}</strong>!`;
      }
    });
    tablero.appendChild(casilla);
  }

  return tablero;
};



const validarGanador = (tablero) => {
  // console.log(tablero)
  const tableChildren = tablero.childNodes;
  const lineasGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // console.log(tablero.childNodes)

  for (let i = 0; i < lineasGanadoras.length; i++) {
    const [a, b, c] = lineasGanadoras[i];
    if (
      tableChildren[a].innerText &&
      tableChildren[a].innerText === tableChildren[b].innerText &&
      tableChildren[a].innerText === tableChildren[c].innerText
    ) {
      return tableChildren[a].innerText;
    }
  }
  return null;
};
