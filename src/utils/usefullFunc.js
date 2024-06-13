export const camelCaseConverter=(texto) =>{
    return texto.split(' ')
      .map((palabra, indice) => 
        indice === 0 ? palabra.toLowerCase() : palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
      .join('');
  }
  