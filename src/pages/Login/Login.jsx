import React from 'react'
import style from './styles.module.css'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={style.Container}>
      <div className={style.login_container}>
      <h1 className={style.login_content}>Login to your linkrr account</h1>
   
      <form  className={style.input_container}>
      <input type="email" placeholder='Email' className={style.input_field}/>
      <input type="password" placeholder='Password' className={style.input_field}/>
        <button className={style.login_btn}>Log In</button>
      </form>
      <Link to="/register" style={{ textDecoration: 'none' }}>
      <h2 className={style.login_content}>Don't have an account? create one</h2>
      </Link>
      <h2 className={style.login_content}>Forgot Password?</h2>
      </div>

    </div>
  )
}

export default Login