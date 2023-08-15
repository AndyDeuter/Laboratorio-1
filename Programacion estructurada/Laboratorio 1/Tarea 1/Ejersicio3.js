var inputString = prompt("Ingrese una palabra:");


function contarLetraE(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'e') {
      count++;
    }
  }
  return count;
}


var repeticiones = contarLetraE(inputString);

console.log("La letra 'e' se repite " + repeticiones + " veces en la palabra ingresada");