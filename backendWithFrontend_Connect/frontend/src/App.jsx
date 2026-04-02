import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [jokes, setjokes] = useState([])

useEffect(()=>{
  axios.get("/api/jokes")
  .then((response)=>{
    setjokes(response.data)
  })
  .catch((Error)=>{
    console.log(Error)
  })
})

  return (
<div>
  <h1>Frontend with Backend Connection Jokes</h1>
      <h4>Total jokes: {jokes.length}</h4>
{
  jokes.map((jokes)=>{
    return <div key={jokes.id}>
    <h2>{jokes.title}</h2>
    <p>{jokes.joke}</p>
    </div>
  })
}
</div>
  )
}

export default App
