
import { init } from "./src/init/initView";
import { localStorageParser } from "./src/utils/usefullFunc";
import "./style.css";

const app$$ = document.querySelector("#app");

app$$.appendChild(init());





