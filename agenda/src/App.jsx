import ListItem from "./ListItem"

const personas = [
  {
    nombre: 'Pedro',
    apellidos: 'Perez',
    email: 'perez@gmail.com',
    telefono: '1223466878'
  },
  {
    nombre: 'Miguel',
    apellidos: 'Cruz',
    email: 'cruz@gmail.com',
    telefono: '2811133832'
  },
  {
    nombre: 'Toño',
    apellidos: 'Daiz',
    email: 'diz@gmail.com',
    telefono: '28175482'
  }
]

function App() {

  return (
    <div>
      <h1 align="center">Agenda</h1>

      <hr />
      <ul>

        {personas.map((persona) => (
          <ListItem
            key={persona.email}
            persona={persona}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
