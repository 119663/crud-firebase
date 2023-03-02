import React from 'react'
import './signin.css';
import { useNavigate } from 'react-router-dom'
import Goods from  './Goods.js';
import Update from  './Update.js';
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser} from 'firebase/auth';
import{auth, google} from '../config/firebase-config';
import { async } from "@firebase/util";

const Signin = () => {

    const navigate = useNavigate();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const signIn = async () =>{
        try{
       await signInWithEmailAndPassword(auth,email,password);
       <Update/>
        } catch(err){
            console.error(err);
        }
    };

    const signInWithGoogle = async () =>{
        try{
       await signInWithPopup(auth, google);  
        } catch(err){
            console.error(err);
        }
    };

  return (
    <div className='App'>
      <h1>SignIn</h1>

      <input class='email'
      placeholder="Email...."  
      onChange={(e) => setEmail(e.target.value)}
      />

      <input class='pass'
       placeholder="Password...."
       type="password"
       onChange={(e) => setPassword(e.target.value)}
      />

      <button class='butt'  onClick={signIn}>SignIn</button>
      <button class="butt" onClick={()=>navigate("/register")}>Register</button>
      <button class="butt" onClick={()=>navigate("/")}>Home</button>
      <button class='butt' onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}

export default Signin