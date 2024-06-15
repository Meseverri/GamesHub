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
  let clickCount=0;
  const selectedList=[];
  for (let i = 0; i < dim; i++) {
    const casilla = document.createElement("div");
    casilla.classList.add("mCard");
    const img = document.createElement("img");
    img.id=`${imgList[i].id}${i}`;
    casilla.id=i;
    img.classList.add("noShow");
    img.src = imgList[i].src;
    casilla.appendChild(img);

    casilla.addEventListener("click", (event) => {
      // const 
      const classValue=event.target.classList.value;
      // let currentId;
      /* este if es porque al convertir en show el taget idse convertia en imagen 
        y el const selectedImg=event.target.childNodes[0];  */
      if(classValue==="mCard"){
        // currentId=event.target.id;
        const selectedImg=event.target.childNodes[0];
        selectedList.push(selectedImg.id)
        selectedImg.classList.value="show";
        clickCount+=1;
      }

      // console.log(clickCount)
      if(clickCount===2){
        console.log(selectedList)
        const currentImg=document.getElementById(selectedList[selectedList.length-1]);
        const prevImg=document.getElementById(selectedList[selectedList.length-2]);
        console.log(`${currentImg}`);
        console.log(`${currentImg}`);
        clickCount=0;
        console.log(currentImg.id[0])
        console.log(prevImg.id[0])
        if(currentImg.src===prevImg.src){
        }else{
          prevImg.classList.value="noShow"
          currentImg.classList.value="noShow"
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
