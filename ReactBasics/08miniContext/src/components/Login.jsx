import React, {useState, useContext} from "react";
import UserContext from "../context/usercontext";

function Login(){
    const [userName, setuserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }
    return(
       <div>
        <h2>Login</h2>
        <input value={userName} onChange={(e) => setuserName(e.target.value) } type="text" placeholder="username" /> {" "}
        <input value={password} onChange={(e) => setPassword(e.target.value) } type="password" placeholder="password" />
        <button onClick={handleSubmit}>Submit</button>
       </div>
    )
}

export default Login