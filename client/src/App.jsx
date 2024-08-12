import { useState } from 'react'
import './App.css'
import AxiosMap from './AxiosMap/AxiosMap';

function App() {
  const [city, setCity] = useState([])
  const country = [
    {
      name: 'India',
      id: 'INR',
      city: ['Mumbai', 'Delhi']
    },
    {
      name: 'England',
      id: 'EUP',
      city: ['London', 'Hogwarts']
    },
    {
      name: 'America',
      id: 'USD',
      city: ['New York', 'California']
    }
  ];
   
  const handleCityChange = (e) => {
    setCity(country[e.target.value].city)
  }
  return (
    <>
     <div className="">
      <select onChange={handleCityChange} name="" id="">
        {country.map((item, i) => (
          <option value={i} key={i}>
            {item.name}
          </option>
        ))}
      </select>
      <select name="" id="">
        {city.length && city.map((item, i) => (
          <option value="" key={i}>
            {item}
          </option>
        ))}
      </select>
     </div>
     <AxiosMap/>
    </>
  )
}

export default App
