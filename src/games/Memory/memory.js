import { icon } from "../../componentes/icon/icon";
import { scoreBoard } from "../../componentes/scoreBoard/scoreBoard";
import { Mimages, arrowNoFill } from "../../data/imgSrc";
import { backInit } from "../../events/events";
import "./memory.css";

export const Mgame = () => {
  const app$$ = document.querySelector("#app");
  app$$.innerHTML = "";
  const icon$$ = icon("return-icon", arrowNoFill);
  icon$$.addEventListener("click", backInit);
  app$$.append(icon$$);

  const section$$ = document.createElement("section");

  //Game section > score board
  const scoreObj = {
    updated: false,
    X: 0,
    O: 0,
  };
  section$$.append(scoreBoard("Player 1", "Player 2", "", ""));
  section$$.append(Mboard(16));
  app$$.append(section$$);
};

const Mboard = (dim) => {
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
  for (let i = 0; i < dim; i++) {
    const casilla = document.createElement("div");
    casilla.classList.add("mCard");
    casilla.id = i;
    const img = document.createElement("img");
    img.id = `${imgList[i].id}${i}`;
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
          // currentId=event.target.id;
          const selectedImg = event.target.childNodes[0];
          selectedList.push(selectedImg.id);
          selectedImg.classList.value = "show";
          clickCount += 1;
          // notPlay = true;
        };

        if (clickCount === 2) {
          clickCount = 0;
          const currentImg = document.getElementById(
            selectedList[selectedList.length - 1]
          );
          const prevImg = document.getElementById(
            selectedList[selectedList.length - 2]
          );
          selectedList=selectedList.slice(selectedList.length - 2);
          console.log(selectedList);
          if (currentImg.id[0] !== prevImg.id[0]) {
            notPlay = true;
            setTimeout(function () {
              // Your code here will run after a delay
              prevImg.classList.value = "noShow";
              currentImg.classList.value = "noShow";
              notPlay = false;
            }, 900);
          } else {
          }
        }
      }
    });

    tablero.appendChild(casilla);
  }
  return tablero;
};

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
