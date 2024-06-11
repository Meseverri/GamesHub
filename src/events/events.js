// arrow back events
import { init } from "../init/initView";
export const backInit = ()=>{
    const app$$ = document.querySelector("#app");
    app$$.appendChild(init());
};

export const backInitHover=()=>{
    
}