// import { icon } from './src/componentes/icon/icon';
// import { Mgame } from './src/games/Memory/memory';
// import { TTTgame } from './src/games/TickTackToe/TTTgame';
import { RPSgame } from './src/games/RockPaperScisor/RPSgame';
import { init } from './src/init/initView';
import './style.css';

const app$$=document.querySelector("#app");

app$$.appendChild(init());
RPSgame();