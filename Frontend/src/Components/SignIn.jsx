import { useState } from "react";
import React from 'react'
import auth from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, } from "react-router-dom";
import userReducer from "../redux/reducers/userReducer";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password")

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSignIn = async (event) => {
    event.preventDefault();

    const user = await auth.signin({ email, password });
    console.log("data", email, password)

    if (user) {
      dispatch({
        type: 'SIGNIN_SUCCESS',
        payload: user
      })
      navigate('/productlist')
    } else {
      alert("Enter valid Credentials")
    }
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

  const passwordIcon = <span className="signin-passwordIcon">{passwordType === "password" ? <FaEyeSlash onClick={handlePassword} /> : <FaEye onClick={handlePassword} />}</span>



  return (
    <div className="App">
      <div className="auth-form-container">
        <h1>Welcome to ABC jewelleries</h1>
        <h2>Sign In</h2>
        <br></br>
        <form className="signin-form" onSubmit={handleSignIn}>
          <label className="signin-label">Email</label>
          <input className="signin-input" type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br></br>
          <label className="signin-label">Password{passwordIcon}</label>

          <input className="signin-input" type={passwordType} placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />

          <br></br>
          <button className='signin-btn' type='submit' >Sign In</button>
        </form>
        <br></br>
        <div>
          <h3>Don't have an account?<a href="/signup"><h3>sign up!</h3></a></h3>

        </div>

      </div>
    </div>
  )
}

export default SignIn;