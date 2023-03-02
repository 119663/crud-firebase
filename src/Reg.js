import React from 'react'
import download from './download.png';
import { useNavigate } from 'react-router-dom'

const Reg = () => {
  const navigate = useNavigate();
  return (
    <div>
          <img src={download} className="App-logo" alt="logo" />
        <h1>This is an example CRUD application that uses Firebase database</h1>
        <button onClick={()=>navigate("/signin")}>SignIn</button>
        <button onClick={()=>navigate("/register")}>Register</button>
        <button onClick={()=>navigate("/goods")}>Goods</button>
    </div>
  )
}

export default Reg