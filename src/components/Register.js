import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import{auth, google} from '../config/firebase-config';
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { useState } from "react";
import { async } from "@firebase/util";
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [number, setPhoneNumber] = useState("");

    const signIn = async () =>{
        try{
       await createUserWithEmailAndPassword(auth, email,name, number, password);  
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

    const logOut = async () =>{
        try{
       await signOut(auth);  
        } catch(err){
            console.error(err);
        }
    };

  return (
    <div className='App'>
      <h1> Registration </h1>

            <input class='email'
            placeholder="Email...."  
            onChange={(e) => setEmail(e.target.value)}
            />

            <input class='name'
            placeholder="Full name...."  
            onChange={(e) => setName(e.target.value)}
            />

            <input class='phone'
            placeholder="Phone number...."  
            onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <input class='pass'
            placeholder="Password...."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            />

            <button class='reg' onClick={signIn}>Register</button>
            {/* <button class='google' onClick={signInWithGoogle}>Sign In With Google</button>  */}
             {/* <button class='logout' onClick={logOut}>Log Out</button> */}

            <button class='nav' onClick={()=>navigate("/signin")}>SignIn</button>
            <button class='hom' onClick={()=>navigate("/")}>Home</button>
    </div>
  )
}

export default Register
