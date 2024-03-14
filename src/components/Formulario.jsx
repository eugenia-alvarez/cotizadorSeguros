import { Fragment } from "react"
import {MARCAS, YEARS, PLANES} from "../constants/index.js"
import useCotizador from "../hooks/useCotizador.jsx"
import Error from "./Error.jsx"

function Formulario() {

    const {datos, setError, error, handleChangeDatos, cotizarSeguro} = useCotizador()

    const handleSubmit = e => {
        e.preventDefault(); //prevenimos el envio del formulario, para primero realizar la validacion

        if(Object.values(datos).includes("")){
            setError("Todos los campos son obligatorios")
            return
        }

        setError("")
        
    cotizarSeguro()
    }

    

  return (
    <>
    {/*En caso de que error contenga algo,
    mostramos el componente de error*/
    error && <Error/>
    }  

     <form onSubmit={handleSubmit}>
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">
                Marca
            </label>
            <select
                name="marca"
                className="w-full p-3 bg-white border border-gray-200"
                onChange={ e => handleChangeDatos(e)}
                value={datos.marca}
            >
                <option value="">--Selecciona Marca--</option> 
                {MARCAS.map((marca) => (
                    <option
                        key={marca.id}
                        value={marca.id}
                    >{marca.nombre}</option>
                ))}
            </select>

        </div>

        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">
                Año
            </label>
            <select
                name="year"
                className="w-full p-3 bg-white border border-gray-200"
                onChange={ e => handleChangeDatos(e)}
                value={datos.year}
            >
                <option value="">--Selecciona el Año--</option> 
                {YEARS.map((year) => (
                    <option
                        key={year}
                        value={year}
                    >{year}</option>
                ))}
            </select>
        </div>

        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">
               Elige un Plan
            </label>
         <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
                <Fragment key={plan.id}>
                  <label>{plan.nombre}</label>
                  <input 
                    type="radio" /**unicamente puede elegir una opcion */
                    name="plan"
                    value={plan.id}
                    onChange={ e => handleChangeDatos(e)}
                  />
                </Fragment>
            ))}
         </div>
        </div>

        <input 
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600
            transition-colors text-white cursor-pointer p-3 uppercase font-bold"
            value="Cotizar"
    
        />
      </form>
    </>
  )
}

export default Formulario
