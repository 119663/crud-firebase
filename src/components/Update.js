import React from 'react'
import { updateCurrentUser} from 'firebase/auth';
import{auth} from '../config/firebase-config';
import { async } from "@firebase/util";
import { useState } from "react";

const Update = () => {

    const[password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [number, setPhoneNumber] = useState("");

    const upDate = async() =>{
        try{
       await updateCurrentUser(auth, password,name, number);
        } catch(err){
            console.error(err);
        }
    };

  return (
    <div>
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

         <button class='update' onClick={upDate}>Update</button>
    </div>
  )
}

export default Update