import { icon } from "../../componentes/icon/icon";
import { score, scoreBoard } from "../../componentes/scoreBoard/scoreBoard";
import { Mimages, arrowNoFill } from "../../data/imgSrc";
import { backInit } from "../../events/events";
import { shuffle } from "../../utils/usefullFunc";
import "./memory.css";

export const Mgame = () => {
  const app$$ = document.querySelector("#app");
  app$$.innerHTML = "";
  const icon$$ = icon("return-icon", arrowNoFill);
  icon$$.addEventListener("click", backInit);
  app$$.append(icon$$);

  const section$$ = document.createElement("section");

  const scoreObj = {
    turn: "player1",
    player1: 0,
    player2: 0,
  };
  //Game section > score board
  section$$.append(scoreBoard("Player 1", "Player 2", "-", "-"));
  //Game section > board

  const boardDiv$$ = document.createElement("div");
  boardDiv$$.classList.add("tableroContenedor");
  boardDiv$$.append(Mboard(16, scoreObj));

  //Game section > reset board
  const reiniciar$$ = document.createElement("p");
  reiniciar$$.innerHTML = `<strong>Reiniciar partida</strong>`;
  reiniciar$$.addEventListener("click", () => {
    const tablero = document.querySelector(".tableroContenedor");
    tablero.childNodes[0].remove();
    //Game section > board container > board
    tablero.append(Mboard(16, scoreObj));
    scoreObj.turn = "player1";
  });

  section$$.append(boardDiv$$);
  section$$.append(reiniciar$$);
  app$$.append(section$$);
};

const Mboard = (dim, scoreObj) => {
  const tablero = document.createElement("div");
  tablero.classList.add("tableroMemoria");
  const imgList = shuffle([...Mimages, ...Mimages]);
  // Click count cuenta los clicks para poder validar y comparar imagenes
  let clickCount = 0;
  //Selected list se almacenaran los ultimos dos elementos seleccionados por los jugadores
  let selectedList = [];
  /*notPlay es un booleano que permitira esperar a que se acabe el tiempo de visualizacion 
  de las cartas para que no hayan mas de 3 casillas volteadas*/
  let notPlay;
  //object que contabiliza si se encuentra una imagen y quien se llevo el punto
  for (let i = 0; i < dim; i++) {
    const casilla = document.createElement("div");
    casilla.classList.add("mCard");
    casilla.id = i;
    const img = document.createElement("img");
    /*id de la imagen tiene una letra asociada a la imagen y un numero
     asociado a la casilla para que sea unico*/
    img.id = `${imgList[i].id}${i}`;
    //por defecto no se mostrara
    img.classList.add("noShow");
    img.src = imgList[i].src;

    casilla.appendChild(img);

    casilla.addEventListener("click", (event) => {
      if (!notPlay) {
        const classValue = event.target.classList.value;

        /* este if es porque al convertir en show el taget id convertia en imagen 
        y el const selectedImg=event.target.childNodes[0]; debuelve un error
        ademas asi nos aseguramos que este seleccionando una casilla volteada */
        if (classValue === "mCard") {
          const selectedImg = event.target.childNodes[0];
          selectedList.push(selectedImg.id);
          selectedImg.classList.value = "show";
          clickCount += 1;
        }

        if (clickCount === 2) {
          clickCount = 0;
          const currentImg = document.getElementById(
            selectedList[selectedList.length - 1]
          );
          const prevImg = document.getElementById(
            selectedList[selectedList.length - 2]
          );
          // restructuracion
          selectedList = selectedList.slice(selectedList.length - 2);
          if (currentImg.id[0] !== prevImg.id[0]) {
            notPlay = true;
            setTimeout(function () {
              // Your code here will run after a delay
              prevImg.classList.value = "noShow";
              currentImg.classList.value = "noShow";
              notPlay = false;
            }, 900);
            scoreObj.turn = changeTurn(scoreObj.turn);
          } else {
            scoreObj[scoreObj.turn] += 1;
            score(scoreObj.turn, scoreObj[scoreObj.turn]);
            scoreObj.turn = changeTurn(scoreObj.turn);
          }
        }
      }
    });

    tablero.appendChild(casilla);
  }
  return tablero;
};

const changeTurn = (val) => {
  let ret;
  val === "player1" ? (ret = "player2") : (ret = "player1");
  return ret;
};
