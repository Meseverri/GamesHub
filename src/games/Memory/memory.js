import { icon } from "../../componentes/icon/icon";
import { arrowNoFill } from "../../data/imgSrc";
import { backInit } from "../../events/events";

import { init } from "../../init/initView";

export const Mgame = () => {
  const app$$ = document.querySelector("#app");
  app$$.innerHTML = "";
  const icon$$ = icon("return-icon",arrowNoFill);

  icon$$.addEventListener("click", backInit);


  app$$.append(icon$$);
};
