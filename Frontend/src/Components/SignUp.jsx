import React, { useState } from 'react'
import auth from '../services/auth';
import {
  FaEye,
  FaEyeSlash
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordType, setPasswordType] = useState("password")
const [confirmPasswordType, setConfirmPasswordType] = useState("password")

  const navigate = useNavigate()

  const handleSignUp = (event) => {
    event.preventDefault();
    if (!name) {
      return alert("name required")
    }
    if (!email) {
      return alert("email required")
    }
    if (!password) {
      return alert("password required")
    }
    auth.signup({ name, email, password });
    if (confirmPassword === password) {
      setConfirmPassword(password)
      navigate('/')
    } else{
      alert("password doesn't match!")
    }
    
    console.log(name, email, password)
  }
  const handlePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return
    }
    else {
      setPasswordType("password")
    }
  }


  const handleConfirmPassword = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text")
      return
    }
    else {
      setConfirmPasswordType("password")
    }
  }

  const passwordIcon = <span> {passwordType === "password" ? <FaEyeSlash onClick={handlePassword} /> : <FaEye onClick={handlePassword} />} </span>
  const confirmPasswordIcon = <span> {confirmPasswordType === "password" ? <FaEyeSlash onClick={handleConfirmPassword} /> : <FaEye onClick={handleConfirmPassword} />} </span>
  return (
    <div className='App'>
      <div className="auth-form-container">
        <h1>Register</h1>

        <form className="signup-form" onSubmit={handleSignUp} >
          <label className="signup-label">Name</label>
          <input className='signup-input' type='text' required placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
          <br></br>
          <label className="signup-label">Email</label>
          <input className='signup-input' type='email' required placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br></br>
          <label className="signup-label">Password  <span className='signup-passwordIcon'>{passwordIcon}</span></label>

          <div>
            <input className='signup-input' type={passwordType} required placeholder='Set your password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <br></br>
          <label className="signup-label">Confirm Password <span className='signup-confirmPasswordIcon'>{confirmPasswordIcon}</span></label>

          <div>
            <input className='signup-input' type={confirmPasswordType} required placeholder='Re-enter your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          </div>
          <br></br>
          <button className='signup-btn' type='submit'>Sign Up</button>
        </form>
        <br></br>
        <div>
          <h3>Already have an acount?<a href="/"><h3>sign in</h3></a></h3>
        </div>
      </div>
    </div>
  )
}

export default SignUp;