import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import WatchList from './components/WatchList'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element = {<Home/>} ></Route>
        <Route path="/watchlist" element = {<WatchList/>} ></Route>
      </Routes>
    </>
  )
}

export default App
