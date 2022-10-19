

/*
    ===== Código de TypeScript =====
*/

function sumar(a: number,b: number){
    return a + b;
}

const sumarFlecha = (a: number,b: number) => {
    return a + b;
}

const resultado = sumar(6, 1);
const resultadoFlecha = sumarFlecha(10,20);
console.log(resultado, resultadoFlecha);