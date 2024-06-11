import { icon } from './src/componentes/icon/icon';
import { TTTgame } from './src/games/TickTackToe/TTTgame';
import { init } from './src/init/initView';
import './style.css';

const app$$=document.querySelector("#app");


app$$.appendChild(init());
TTTgame();