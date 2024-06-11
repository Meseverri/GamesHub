import "./gameCard.css"
export const game = (title,id) => {
    const card$$=document.createElement("div");
    card$$.classList.add("gameCard");
    card$$.id=id;

    const h2$$=document.createElement("h3"); 
    
    h2$$.innerText=title;
    card$$.appendChild(h2$$);

    return card$$ 
}