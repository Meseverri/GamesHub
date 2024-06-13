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
  // console.log(imgList)
  for (let i = 0; i < dim; i++) {
    const casilla = document.createElement("div");
    casilla.classList.add("mCard");
    const img = document.createElement("img");
    img.src = imgList[i];
    casilla.appendChild(img);
    casilla.addEventListener("click", (event) => {});
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
