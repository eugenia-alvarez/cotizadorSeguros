import { useState, createContext} from "react"
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero} from "../helpers"

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {


    const [datos, setDatos] = useState({
        marca:"",
        year:"",
        plan:""
    })

    const [error, setError] = useState("")
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    //Función que actualiza el State
    const handleChangeDatos = e => {
        setDatos({
            ...datos, //tomamos una copia del state previo
            [e.target.name] : e.target.value //modificamos el state
        })
    }

    //Funcion que cotiza el seguro
    const cotizarSeguro = () => {
      
        //Una base
        let resultado = 2000

        //Obtener diferencia de años (año actual y año seleccionado por el usuario)
        const diferencia = obtenerDiferenciaYear(datos.year)
     

        //Hay que restar el 3% por cada año(un seguro 2020 es un 3% mas barato q un seguro 2021)
        /**Restamos el 3 por ciento por cada año, del resultado */
        resultado -= ((diferencia * 3) * resultado) / 100;
        

        //Americano incrementa el costo el 15%
        //Europeo incrementa el costo el 30%
        //Asiatico incrementa el costo el 5%
       /*resultado = resultado + calcularMarca(datos.marca, resultado) OPCION 1*/
        resultado *= calcularMarca(datos.marca) //OPCION 2
      

        //Plan básico incrementa 20%
       //Plan completo incrementa 50%
       resultado *= calcularPlan(datos.plan)
       resultado = formatearDinero(resultado)
       
       setCargando(true)

       setTimeout(() => {
        setResultado(resultado)
        setCargando(false)
       }, 3000);
      
    }


    return(
        <CotizadorContext.Provider 
            value={{ /**hacemos disponibles los datos que deseemos en los demas componentes */
            datos,    
            setError,
            error,
            handleChangeDatos,
            cotizarSeguro,
            resultado, 
            cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext