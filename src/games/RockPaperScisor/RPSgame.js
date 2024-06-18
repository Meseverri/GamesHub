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

  // Update the count down every 1 second
  document.querySelector(".RPSselector").innerText = `${userItem.icon} ${count+1}`;
  var countdownfunction = setInterval(function () {
    // Display the result in an element with id="demo"
    document.querySelector(".RPSselector").innerText = `${userItem.icon} ${count}`;

    // Decrease the count by 1
    count--;

    // If the count down is finished, write some text
    if (count < 0) {
      clearInterval(countdownfunction);
      // Call your win or loss function here
      var result = winOrLoss(); // Assume this is your function
      // document.querySelector(".RPSselector").innerHTML = result;
      document.querySelector(".RPSselector").innerText = `${userItem.icon} ${randomItem.icon}`;
    }
  }, 900);
};

// Example win or loss function
function winOrLoss() {
  // This is just a simple example, you can implement your own logic
  var random = Math.random();
  if (random < 0.5) {
    return "Win!";
  } else {
    return "Loss!";
  }
}
