import { useState } from 'react'
import './App.css'

function App() {
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
   

  return (
    <>
     <div className="">
      {country.map}
     </div>
    </>
  )
}

export default App
