import { useState } from 'react'
import './App.css'
import Routing from './components/Rounting'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routing />
    </>
  )
}

export default App
