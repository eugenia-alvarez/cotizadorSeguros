export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
} 

//La opcion 1 o la opcion 2 son correctas
/* OPCION 1
export function calcularMarca(marca, resultado){
    let incremento 
    if(marca === "1"){
        incremento = (30 * resultado) / 100;
        return incremento
    }
    else if (marca === "2"){
        incremento = (15 * resultado) / 100;
        return incremento
    }
    else if(marca === "3"){
        incremento = (5 * resultado) / 100
        return incremento
    }
}
*/
//OPCION 2
export function calcularMarca(marca){
    let incremento 
    if(marca === "1"){
        incremento = 1.30
        return incremento
    }
    else if (marca === "2"){
        incremento = 1.15
        return incremento
    }
    else if(marca === "3"){
        incremento = 1.05
        return incremento
    }
}

//Calcular PLAN
export function calcularPlan(plan){
    let incremento
    if(plan === "1"){ //id Plan basico
        incremento = 1.20
      return incremento
    }
    else{
        incremento = 1.50 //id Plan completo
        return incremento
    }
}

//Formatear Dinero
export function formatearDinero(cantidad){
    return cantidad.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
        currencyDisplay: "symbol" // Mostrar el símbolo de la moneda primero
    })
}