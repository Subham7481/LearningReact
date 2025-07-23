import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  var myObj = {
    username: "Hitesh",
    age: 34
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">Vite + React</h1>
      <Card username="chaiorcode" />
      <Card username="Subham Learning web dev and node js."/>
    </>
  )
}

export default App
