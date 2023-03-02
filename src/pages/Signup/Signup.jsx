import React, { useReducer } from 'react'
import style from './styles.module.css'
import { Link, useNavigate } from "react-router-dom";
import { initialState,registerReducer } from '../../reducers/registerReducer';
import { useAuth } from '../../contexts/authContext';
const Signup = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);
  const { username, email, password, error, loading } = state;
    const invalid = username === "" || email === "" || password === "";
    const {signUp} = useAuth();
    const navigate = useNavigate();
    const handleSignUp = async (event) => {
      event.preventDefault();
  console.log("signup pressed")
      dispatch({ type: "register" });
  
  
        try {
          await signUp({username,email, password});
          dispatch({ type: "success" });
          navigate("admin");
        } catch (error) {
          const message = error.message
            .split(/(?<=\/)(.*?)(?=\))/gm)[1]
            .replace(/-/g, " ");
          dispatch({
            type: "error",
            error: message,
          });
        }

    };
  return (
    <div className={style.Container}>
    <div className={style.signup_container}>
    <p className={style.error_content}>
            {error}
          </p>
    <h1 className={style.signup_content}>Create your account on Linkrr</h1>
 
    <form  className={style.input_container}>
    <input 
    value={username}
    type="name" 
    placeholder='Your name'  
    className={style.input_field}
    onChange={(e) =>
      dispatch({
        type: "field",
        field: "username",
        value: e.target.value,
      })}
    />
    <input 
     value={email}
    type="email" 
    placeholder='Email' 
    className={style.input_field}
    onChange={(e) =>
      dispatch({
        type: "field",
        field: "email",
        value: e.target.value,
      })}
    />
    <input 
     value={password}
    type="password" 
    placeholder='Password' 
    className={style.input_field}
    onChange={(e) =>
      dispatch({
        type: "field",
        field: "password",
        value: e.target.value,
      })}
    />
      <button
             disabled={invalid} 
             onClick={handleSignUp}
      className={`${invalid?`${style.signup_btn_invalid}`:`${style.signup_btn_valid}`} `}>
        Sign Up
        </button>
    </form>
    <Link to="/" style={{ textDecoration: 'none' }}>
    <h2 className={style.signup_content}>Already on Linkrr? Log In</h2>
    </Link>
    </div>

  </div>
  )
}

export default Signup