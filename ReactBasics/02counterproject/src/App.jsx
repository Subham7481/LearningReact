import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () => {
    console.log('Clicked!', counter)
    
    if(counter < 20){
      // counter += 1
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      //Value will increase by 1 because override all the setCounter and only last will work.
    }
  }

  const removeValue = () => {
    console.log('Removed', counter)
     
    if(counter > 0){
      counter -= 1
    setCounter(counter)
    }
  }

  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Increase value</button>
    <br />
    <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
