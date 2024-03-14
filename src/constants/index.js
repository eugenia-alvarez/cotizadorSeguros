export const MARCAS = [
    {id: 1, nombre: "Europeo"},
    {id: 2, nombre: "Americano"},
    {id: 3, nombre: "Asiatico"}
];

const YEARMAX = new Date().getFullYear();
//Creamos una lista de los ultimos 20 años
export const YEARS = Array.from(new Array(20), (valor, index) => YEARMAX - index) //Array.from convierte lo que le pasemos a un arreglo
console.log(YEARS)

export const PLANES = [
    {id: 1, nombre:"Básico"},
    {id: 2, nombre: "Completo"}
]