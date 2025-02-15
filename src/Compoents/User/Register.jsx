import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Layout/Header'
import "./Register.css"
import registerimage from "../../Assets/images/registerpage.png"
import { AuthContext } from '../Product/AuthContext'

export default function Register() {
  const {login}=useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const success = await login(email, password);
    if (!success) {
      setError("Invalid credentials!");
    } else {
      setError("");
      alert("Login successful!");
    }
  };

  return (
    <div >
      <Header/>
      <div className='box'>
        <img src={registerimage} alt='img' />
        <div className='d-flex flex-column justify-content-start p-1'>
            <div className='m-2'>
               <b>Login</b>  or <b>Signup</b>
            </div>
            {/* <input type='text' placeholder= "+91"  /> */}
            <input className='text' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'/>
            <input className='mt-2' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
            <p className='text'>By continuing, I agree to the Terms of Use & Privacy Policy </p>
            <Link to="/"><button onClick={handleLogin} className="text-decoration-none text-black w-100">Login</button></Link>
            {error && <p className='text-danger'>{error}</p>}
            <p className='text'>Having trouble logging in? Get help</p>
        </div>
      </div>
    </div>
  )
}
