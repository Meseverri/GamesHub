import "./icon.css";
export const icon = (
  classname,
  src
) => {
  const icon$$ = document.createElement("div");
  icon$$.classList.add(classname);

  const img$$=document.createElement("img");

  img$$.src=src;
  icon$$.append(img$$)

  return icon$$;
  // return icon$$.childNodes[0];
};
