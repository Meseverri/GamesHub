import { icon } from '../componentes/icon/icon';
import { Mgame } from '../games/Memory/memory';
import { RPSgame } from '../games/RockPaperScisor/RPSgame';
import { TTTgame } from '../games/TickTackToe/TTTgame';
import { game } from '../componentes/gameCard/gameCard';
import './initView.css';

export const init=()=>{
    const app$$=document.querySelector("#app");
    app$$.innerHTML=""

    const section$$=document.createElement("section");
    const h1$$=document.createElement("h1");
    
    h1$$.innerText="Choose a Game";
    section$$.appendChild(h1$$);
    
    const gamesDiv$$=document.createElement("div");
    gamesDiv$$.classList.add("gamesConteiner");
    //Tres en raya
    gamesDiv$$.append(game("Tres en raya","game1"));
    //Memoria
    gamesDiv$$.append(game("Memoria","game2"));
    //Piedra papel o tijera
    gamesDiv$$.append(game("Piedra papel o tijera","game3"));
    
    section$$.append(gamesDiv$$);
    const game0$$=gamesDiv$$.childNodes[0];
    game0$$.addEventListener("click",TTTgame);

    const game1$$=gamesDiv$$.childNodes[1];
    game1$$.addEventListener("click",Mgame);
   
    const game2$$=gamesDiv$$.childNodes[2];
    game2$$.addEventListener("click",RPSgame);
    return section$$
    
}


