import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello World</h1>
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
        Click me!
      </button>
    </div>
    </>
  )
}

export default App
