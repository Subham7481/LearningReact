import { useEffect ,useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState([]);
  const [inputvalue, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const addTask = () =>{
    if(inputvalue.trim() !== ''){
      setTask([...task, inputvalue]);
      setValue('')
    }
  }

 return (
    <div className="p-4">
      <h2 className="text-white text-xl mb-4">Your Tasks:</h2>
      <ul className="text-white mb-4">
        {tasks.map((task, index) => (
          <li key={index} className="mb-1">- {task}</li>
        ))}
      </ul>

      <div className="flex gap-2 items-center mb-2">
        <label htmlFor="text" className="text-white">Enter the task:</label>
        <input 
          type="text"
          className="bg-black text-white px-4 py-2 rounded-2xl"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={addTask}
      >
        Add task
      </button>
    </div>
  );
}

export default App
