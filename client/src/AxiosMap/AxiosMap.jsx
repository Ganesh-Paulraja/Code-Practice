// print all names from api
// https://jsonplaceholder.typicode.com/users

import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function AxiosMap() {
  const [user, setUser] = useState(null)
  console.log(user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData()
  },[])
  return (
    <div>
      {user && user.map((val, i) => (
        <div key={i} className="user-wrap">
          {val.name}
        </div>
      ))}
    </div>
  )
}
