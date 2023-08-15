function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    
    return true;
}

function FactoresPrimosA(numeroMaximo) {
    const numerosPrimos = [];
    
    for (let i = 2; i <= numeroMaximo; i++) {
        if (esPrimo(i)) {
            numerosPrimos.push(i);
        }
    }
    
    return numerosPrimos;
}

console.log(FactoresPrimosA(5));  
console.log(FactoresPrimosA(15)); 
