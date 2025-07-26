import { useEffect ,useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //API Call
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.log('Error fetching data :', error));

  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(user => (<li key={user.id}>{user.name}</li>))}
      </ul>

      <div>
        <ul style={{display: "flex", listStyle: "none" }}>
        <li>Milk</li>
        <li>Egg</li>
        <li>Flour</li>
        <li>Tea</li>
      </ul>
      </div>
    </div>
  );
}

export default App
