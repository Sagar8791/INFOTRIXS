import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import {  signInWithEmailAndPassword } from "firebase/auth";

import { auth } from '../firebase';

function Login() {

  const [err,setErr]=useState(false);
  const navigate = useNavigate()

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    const email=e.target[0].value;
    const password=e.target[1].value;
    
    try{
     await  signInWithEmailAndPassword(auth, email, password)
     navigate("/")
    }catch(err){
      setErr(true)

    }

  };
  

  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'>ChatRoom</span>
        <span className='tittle'>Login</span>
        <form onSubmit={handleSubmit}>
           
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
           
            <button>Sign In</button>
            {err && <span>Something went wrong</span>}
        </form>
        <p>
            You don't you have account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login;
