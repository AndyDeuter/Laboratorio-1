function calcularMCD(a, b) {
    while (b !== 0) {
      var temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function calcularMCM(a, b) {
    return (a * b) / calcularMCD(a, b);
  }
  
  var num1 = parseInt(prompt("Ingresa el primer número:"));
  var num2 = parseInt(prompt("Ingresa el segundo número:"));
  var num3 = parseInt(prompt("Ingresa el tercer número:"));
  
  var mcm1 = calcularMCM(num1, num2);
  var mcmFinal = calcularMCM(mcm1, num3);
  
  console.log("El mínimo común múltiplo de " + num1 + ", " + num2 + " y " + num3 + " es: " + mcmFinal);
  