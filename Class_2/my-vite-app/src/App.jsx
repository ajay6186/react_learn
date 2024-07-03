import './App.css'
import MyComponent, {name, name1, name2} from './components/MyComponent'
import DisplayData from './components/DIsplayData';
import ConditionalRender from './components/ConditionRender';
import Button from './components/Form';

function App() {
  const name = 'ajay'
  console.log(name, name1, name2);

  const fruits = ["Apple", "Banana", "Mango", "Orange", "Guava"];
  const person = {
    name: "John Doe",
    age: 25,
  }
  return (

    // <div>
    //   <MyComponent />,
    //   <h1>Hello react</h1>
    // </div>,
    
    // <div>
    //   <h1>test ajay</h1>,
    //   <MyComponent />
    //   <MyComponent />
    //   <MyComponent />
    // </div>

    <>
      <Button />
      <ConditionalRender isLoggedIn={false} username={person.name}/>
      <MyComponent message={'message 1'} label = "hii 111"/>
      <MyComponent message={'message 2'} label = "hii 222"/>
      <MyComponent message={'message 3'} label = "hii 333"/>
      <DisplayData fruits={fruits} person={person}/>
      <p>test abcd</p>
    </>

  )
}

export default App
