export const camelCaseConverter = (texto) => {
  return texto
    .split(" ")
    .map((palabra, indice) =>
      indice === 0
        ? palabra.toLowerCase()
        : palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    )
    .join("");
};

export const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
