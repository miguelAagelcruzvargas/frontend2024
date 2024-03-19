
import { useState } from 'react'
function App() {

  const [InputsForm, setInputsForm] = useState({
    username: "",
    password: ""
  })

  const handleInputsForm = (event) => {
    setInputsForm({

      ...InputsForm,
      [event.target.name]: event.target.value
    })
  }



  const handleSubmit = (e) => {

    e.preventDefault()
  }

  return (

    <div className="text-center">
      <h1>Inputs</h1>
      <hr />
      <form onSubmit={(e) => handleSubmit(e)}
        className='w-50 mx-auto'>
        <div>
          <label htmlFor="Username">Username:</label>

          <input onChange={(event) => handleInputsForm(event)}
            id="Username"
            type="text"
            name="username"
            value={InputsForm.username} />

        </div>
        <div className='mb-3'>

          <label htmlFor="Password">Password:</label>
          <input onChange={(event) => handleInputsForm(event)}
            id="Password"
            type="password"
            name="Password"
            value={InputsForm.password} />

        </div>
        <button type="submit">Submit</button>

      </form>
      <hr />

      <h6>Inicio de sesion con las siguientes credenciales:</h6>

      <p>Username: {InputsForm.username}</p>
      <p>Password: {InputsForm.password}</p>
    </div>

  )
}

export default App
