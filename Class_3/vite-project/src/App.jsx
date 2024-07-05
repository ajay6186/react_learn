import { useState } from 'react'
import './App.css'
import SimpleForm from './components/Form';
import TemperatureInput from './components/TemparatureInput';
import TemperatureDisplay from './components/TemparatureDisplay';
import ExampleComponent from './components/Effect';
import FetchDataComponent from './components/FetchData';

function App() {
  const [count, setCount] = useState(0) // returns an array with two elements which is a state variable and function to updated
  // const count = arr[0]
  // const setCount = arr[1]
  const [temperature, setTempareture] = useState("")

  const handleTemparatureChange = (newTemperature) => {
    setTempareture(newTemperature)
  }
  let ctr = 0;

  const increamentCount = () => {
    setCount(count + 1) //update the count state with the new value ( increamented value)
    ctr += 1
      console.log(ctr)
    }
  
  const decreamentCount = () => {
    setCount(count - 1) //update the count state with the new value ( decreament value)
    }

  console.log("test count", typeof(count));
  console.log("test setCount", typeof(setCount) );

  return (
    <>

    {/* <p>Count : {count}</p>
    <button onClick={increamentCount}>Increament</button>
    <button onClick={decreamentCount}>Decreament</button>
    <SimpleForm/>
    <TemperatureInput  temperature={temperature} onTemperatureChange={handleTemparatureChange}/>
    <TemperatureDisplay temperature={temperature}/>   */}

    {/* <ExampleComponent /> */}
    <FetchDataComponent/>

    </>
  )
}

export default App
