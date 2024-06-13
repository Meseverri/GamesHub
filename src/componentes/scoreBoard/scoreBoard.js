import { camelCaseConverter } from "../../utils/usefullFunc";
import "./scoreBoard.css";
 
export const scoreBoard = (p1="X",p2="O",p1score="-",p2score="-") => {
  const scoreBoard = document.createElement("div");

  scoreBoard.classList.add("scoreBoard");
  const Xscore = score(p1, p1score);
  const Oscore = score(p2, p2score);

  scoreBoard.appendChild(Xscore);
  scoreBoard.appendChild(Oscore);
  return scoreBoard;
};

export const score = (txt, score) => {
    const CCtxt=camelCaseConverter(txt);
    const scoreCreated$$ = document.querySelector(`.${CCtxt}Score`);
    if (!scoreCreated$$) {
      const score$$ = document.createElement("div");
      const p = document.createElement("p");
      p.innerText = txt;
      p.classList.add(CCtxt);
      //Score element p
  
      const scoreP$$ = document.createElement("p");
      scoreP$$.innerText = score;
      scoreP$$.classList.add(`${CCtxt}Score`);
  
      score$$.appendChild(p);
      score$$.appendChild(scoreP$$);
      return score$$;
    } else {
      console.log();
      scoreCreated$$.innerText = score;
    }
  };
