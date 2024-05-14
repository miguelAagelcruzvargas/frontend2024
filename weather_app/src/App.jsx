import { useState } from "react"
import WeatherCard from "./components/WeatherCard"
import Search from "./components/Search.jsx"
import './assets/css/index.css'
import { useForm} from "./Hooks/useForm"

function App() {
  
  const[cities, setCities] = useState(["tuxtepec"])


  
  const [values,handleInputChange, reset] = useForm ({searchCity:""})

  
  return (
    <>
    <div className="container">
      <h1>weather app</h1>
      <hr />
      <div className="row">
      <Search
        values={values}
        handleInputChange={handleInputChange}
        reset={reset}
        cities={cities}
        setCities={setCities}
        />
      </div>
      <div className="row">
        {
          cities.length === 0 ?
          <h2>Search a city to show its weather</h2>:
          cities.map((city, index) => (
            <WeatherCard key={index} city={city}/>
          ))
        }   
    </div>
    </div>
    </>
  )
}

export default App