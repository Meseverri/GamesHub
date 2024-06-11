import { icon } from "../../componentes/icon/icon";
import { init } from "../../init/initView";
import { arrowNoFill } from "../../data/imgSrc";
import { backInit } from "../../events/events";

export const RPSgame = () => {
  const app$$ = document.querySelector("#app");
  app$$.innerHTML = "";
  const icon$$ = icon("return-icon",arrowNoFill);
  
  icon$$.addEventListener("click", backInit);

  app$$.append(icon$$);
};
