import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Layout/Header'
// import "./Register.css"
import "../CommonStyle.css"
import registerimage from "../../Assets/images/registerpage.png"
import { AuthContext } from '../Product/AuthContext'
import { useTranslation } from '../Translation/TranslationContext'
import { toast } from 'react-toastify'
import Button from '../Layout/Button'

export default function Register() {
  const {t} = useTranslation();
  const {login}=useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleLogin = async () => {
    const success = await login(email, password);
    if (!success) {
      toast.error(t("Invalid credentials!"));
      
    } else {
      toast.success(t("Login successful!"));
    }
  };

  return (
    <div >
      <Header/>
      <div className='w400 m-auto border'>
        <img className='w400' src={registerimage} alt={t("img")} />
        <div className='d-flex flex-column justify-content-start p-1'>
            <div className='m-2'>
               <b>{t("Login")}</b>  {t("or")} <b>{t("Signup")}</b>
            </div>
            {/* <input type='text' placeholder= "+91"  /> */}
            <input className='text' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={t("Email")}/>
            <input className='mt-2' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder={t("password")}/>
            <p className='text'>{t("By continuing, I agree to the Terms of Use & Privacy Policy")} </p>
            <Link to="/">
            <Button onClick={handleLogin} btn="primary"className='overflow-hidden w-100 mx-auto' text={t("Login")} />
            </Link>
            <p className='text'>Having trouble logging in? Get help</p>
        </div>
      </div>
    </div>
  )
}
