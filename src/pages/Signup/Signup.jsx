import React from 'react'
import style from './styles.module.css'
const Signup = () => {
  return (
    <div className={style.Container}>
    <div className={style.signup_container}>
    <h1 className={style.signup_content}>Create your account on Linkrr</h1>
 
    <form  className={style.input_container}>
    <input type="name" placeholder='Your name' className={style.input_field}/>
    <input type="email" placeholder='Email' className={style.input_field}/>
    <input type="password" placeholder='Password' className={style.input_field}/>
      <button className={style.signup_btn}>Sign Up</button>
    </form>
    <h2 className={style.signup_content}>Already on Linkrr? Log In</h2>
    </div>

  </div>
  )
}

export default Signup