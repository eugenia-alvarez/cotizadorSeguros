import {useContext} from "react"
import CotizadorContext from "../context/Cotizador.provider"

const useCotizador = () => {

    return useContext(CotizadorContext)

}

export default useCotizador