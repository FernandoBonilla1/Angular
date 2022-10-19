

/*
    ===== Código de TypeScript =====
*/

//Arreglo con variable estricto 
let habilidades: string[] = ["Healing", "Bash", "Counter"];

//parametros de objeto
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
}

//Objeto
const personaje: Personaje = {
    nombre: "Fernando",
    hp: 100,
    habilidades: ["bash", "Counter"]
}

console.table(personaje);