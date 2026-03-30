import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/about">Sobre</Link>
      <hr />
      <Link to="/data">Data</Link>
    </>
  )
}

export default App
