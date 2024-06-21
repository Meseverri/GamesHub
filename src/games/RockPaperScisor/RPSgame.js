import { icon } from "../../componentes/icon/icon";
import { init } from "../../init/initView";
import { arrowNoFill } from "../../data/imgSrc";
import { backInit } from "../../events/events";
import "./RPSgame.css";
import { score, scoreBoard } from "../../componentes/scoreBoard/scoreBoard";
import { localStorageParser } from "../../utils/usefullFunc";
//Rock paper Scisor game
export const RPSgame = () => {
  const app$$ = document.querySelector("#app");
  app$$.innerHTML = "";
  //return to main menu
  const icon$$ = icon("return-icon", arrowNoFill);
  icon$$.addEventListener("click", backInit);
  app$$.append(icon$$);
  //Section creation
  const section$$ = document.createElement("section");
  const scoreObj = 
  localStorageParser("RPSScore", {
    user: 0,
    computer: 0,
  }) || {
    user: 0,
    computer: 0,
  };

  //section > score board
  const score$$ = scoreBoard("User", "Computer", scoreObj.user, scoreObj.computer);
  const items = [
    { name: "scissors", icon: "✌️" },
    { name: "paper", icon: "🖐️" },
    { name: "rock", icon: "✊" },
  ];
  //Game section > board

  const boardDiv$$ = document.createElement("div");
  boardDiv$$.classList.add("tableroContenedor");
  boardDiv$$.append(RPSboard(items, scoreObj));

  // const boardDiv$$ = RPSboard(items, scoreObj);
  const reiniciar$$ = document.createElement("p");
  reiniciar$$.innerHTML = `<strong>Reiniciar partida</strong>`;
  reiniciar$$.addEventListener("click", () => {
    const tablero = document.querySelector(".tableroContenedor");
    tablero.childNodes[0].remove();
    //Game section > board container > board
    tablero.append(RPSboard(items, scoreObj));
  });

  
  // boardDiv$$.appendChild(board$$);
  section$$.append(score$$);
  section$$.append(boardDiv$$);
  section$$.append(reiniciar$$);
  app$$.append(section$$);
};

const RPSboard = (items, scoreObj) => {
  let randomItem = items[Math.floor(Math.random() * items.length)];

  let boardDiv = document.querySelector("RPSselector");
  if (!boardDiv) {
    boardDiv = document.createElement("div");
    boardDiv.classList.add("RPSselector");
  } else {
    boardDiv.innerHTML = "";
  }

  // const board$$ = document.createElement("div");
  // board$$.classList.add("RPSselector");
  for (let i = 0; i < items.length; i++) {
    const item$$ = document.createElement("div");
    item$$.classList.add("RPSitem");
    item$$.classList.add(items[i].name);
    item$$.innerText = items[i].icon;
    item$$.addEventListener("click", (event) => {
      countdown(items[i], randomItem, scoreObj);
      
      randomItem = items[Math.floor(Math.random() * items.length)].name;
    });

    boardDiv.appendChild(item$$);
  }
  return boardDiv;
};
const countdown = (userItem, randomItem, scoreObj) => {
  // Set the count down start
  var count = 2;
  const RPSselector = document.querySelector(".RPSselector");
  // Update the count down every 1 second
  const countDiv = document.createElement("div");
  countDiv.innerText = `${userItem.icon}:${count + 1}`;
  RPSselector.innerText = ``;
  RPSselector.appendChild(countDiv);
  var countdownfunction = setInterval(function () {
    countDiv.innerText = `${userItem.icon}:${count}`;
    // Decrease the count by 1
    count--;
    // If the count down is finished, write some text
    if (count < 0) {
      clearInterval(countdownfunction);
      // Call your win or loss function here
      var result = winOrLoss(userItem.name, randomItem.name); // Assume this is your function
      // document.querySelector(".RPSselector").innerHTML = result;
      const resultContainer = document.createElement("div");
      resultContainer.innerText = result;
      if (result === "You win!") {
        scoreObj.user++;
        localStorage.setItem("RPSScore",JSON.stringify(scoreObj));
        score("user", scoreObj.user);
      }
      if (result === "You lose!") {
        scoreObj.computer++;
        localStorage.setItem("RPSScore",JSON.stringify(scoreObj));
        score("computer", scoreObj.computer);
      }
      countDiv.innerText = `${userItem.icon} ${randomItem.icon}`;
      RPSselector.appendChild(resultContainer);
    }
  }, 900);
};

const  winOrLoss=(user, computer)=> {
  // var computerChoice = getComputerChoice();
  let retobject = {};
  if (user === computer) {
    return "It's a draw!";
  }

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    return "You win!";
  }

  return "You lose!";
}
