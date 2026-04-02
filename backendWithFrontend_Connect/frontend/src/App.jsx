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
<div className="min-h-screen bg-gray-100 p-6">
  <div className="max-w-2xl mx-auto">
    
    <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
      Frontend with Backend Connection Jokes
    </h1>

    <h4 className="text-center text-gray-600 mb-6">
      Total jokes: {jokes.length}
    </h4>

    <div className="space-y-4">
      {jokes.map((joke) => {
        return (
          <div
            key={joke.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {joke.title}
            </h2>
            <p className="text-gray-600">{joke.joke}</p>
          </div>
        );
      })}
    </div>

  </div>
</div>
  )
}

export default App
