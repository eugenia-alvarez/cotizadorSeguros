import {CotizadorProvider} from "./context/Cotizador.provider"
import AppSeguro from "./components/AppSeguro"

function App() {
  return (
    <>
      <CotizadorProvider>
        <AppSeguro/>
      </CotizadorProvider>

    </>
  )
}

export default App
