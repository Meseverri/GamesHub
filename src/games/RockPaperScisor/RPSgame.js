import { icon } from "../../componentes/icon/icon";
import { init } from "../../init/initView";
import { arrowNoFill } from "../../data/imgSrc";
import { backInit } from "../../events/events";
import "./RPSgame.css";

export const RPSgame = () => {
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

  const items = [
    { name: "scissors", icon: "✌️" },
    { name: "paper", icon: "🖐️" },
    { name: "rock", icon: "✊" },
  ];
  let randomItem = items[Math.floor(Math.random() * items.length)];
  //Game section > board

  const boardDiv$$ = document.createElement("div");
  boardDiv$$.classList.add("RPSselector");

  // const board$$ = document.createElement("div");
  // board$$.classList.add("RPSselector");
  for (let i = 0; i < items.length; i++) {
    const item$$ = document.createElement("div");
    item$$.classList.add("RPSitem");
    item$$.classList.add(items[i].name);
    item$$.innerText = items[i].icon;
    item$$.addEventListener("click", (event) => {
      // console.log(event.target)
      console.log(items[i].name);
      console.log(randomItem);
      countdown(items[i],randomItem)
      randomItem = items[Math.floor(Math.random() * items.length)].name;
    });

    boardDiv$$.appendChild(item$$);
  }

  // boardDiv$$.appendChild(board$$);

  section$$.append(boardDiv$$);
  app$$.append(section$$);
};
// Set the count down start

const countdown = (userItem,randomItem) => {
  var count = 2;
  const RPSselector=document.querySelector(".RPSselector");
  // Update the count down every 1 second
  const countDiv=document.createElement("div");
  countDiv.innerText=`${userItem.icon}:${count+1}`
  RPSselector.innerText = ``;
  RPSselector.appendChild(countDiv)
  var countdownfunction = setInterval(function () {
    // Display the result in an element with id="demo"
    countDiv.innerText = `${userItem.icon}:${count}`;
    // Decrease the count by 1
    count--;
    // If the count down is finished, write some text
    if (count < 0) {
      clearInterval(countdownfunction);
      // Call your win or loss function here
      var result = winOrLoss(userItem.name,randomItem.name); // Assume this is your function
      // document.querySelector(".RPSselector").innerHTML = result;
      const resultContainer=document.createElement("div")
      resultContainer.innerText=result
      countDiv.innerText = `${userItem.icon} ${randomItem.icon}`;
      RPSselector.appendChild(resultContainer)
    }
  }, 900);
};


function winOrLoss(user,computer) {
  // var computerChoice = getComputerChoice();
  
  if(user === computer) {
    return 'It\'s a draw!';
  }

  if(
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) {
    return 'You win!';
  }

  return 'You lose!';
}