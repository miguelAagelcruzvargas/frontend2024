//state

import { useState } from "react"


function App() {

  const [cuenta, setCuenta] = useState(0)



  const handleButtonIncrementar = () => {

    setCuenta(cuenta + 1)
  }

  //const handleButtonnDecrementar = () => {
  // setCuenta(cuenta - 1)
  // }


  return (

    <div>

      <h1 align="center"> Contador</h1>
      <hr />

      <h2>{cuenta}</h2>


      <button onClick={handleButtonIncrementar} >incrementar</button>

      <button onClick={() => setCuenta(cuenta - 1)}>Decrementar</button>

      <button onClick={() => setCuenta(cuenta - cuenta)}>Reiniciar</button>

    </div>

  )
}

export default App