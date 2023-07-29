import React, { useReducer } from 'react'
import style from './styles.module.css'
import { Link, useNavigate } from "react-router-dom";
import { loginReducer,initialState } from '../../reducers/loginReducer';
import { useAuth } from '../../contexts/authContext';

const Login = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const {  email, password, error, loading } = state;
    const invalid =  email === "" || password === "";
    const {logIn} = useAuth();
    const navigate = useNavigate();
    const handleLogIn = async (event) => {
      event.preventDefault();
  console.log("login pressed")
      dispatch({ type: "login" });
  
  
        try {
          await logIn({email, password});
          dispatch({ type: "success" });
          navigate("/admin");
        } catch (error) {
          console.log(error)
          // const message = error.message
          //   .split(/(?<=\/)(.*?)(?=\))/gm)[1]
          //   .replace(/-/g, " ");
          // dispatch({
          //   type: "error",
          //   error: message,
          // });
        }

    };
  return (
    <div className={style.Container}>
      <div className={style.login_container}>
      <h1 className={style.login_content}>Login to your linkrr account</h1>
   
      <form  className={style.input_container}>
      <input 
      type="email"
      value={email} 
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
      type="password" 
      value={password} 
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
                   onClick={handleLogIn}
                   className={`${invalid?`${style.login_btn_invalid}`:`${style.login_btn_valid}`} `}
        
        >Log In</button>
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