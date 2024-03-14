import useCotizador from "../hooks/useCotizador"

function Error() {
    const {error} = useCotizador()
  return (
    <div className="bg-red-200 p-3 uppercase font-bold text-center border-l border-solid border-2 border-red-700">
      {error}
    </div>
  )
}

export default Error
