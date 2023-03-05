import React, { createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext()
export function useAuth() {
    return useContext(AuthContext);
  }

 

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const  currentUserData  = JSON.parse(localStorage.getItem('linkrruser'));


    useEffect(() => {
      if (currentUserData) {
        console.log("currentuserdata")
        console.log(currentUserData)
        setCurrentUser(currentUserData);
      } else {
        setCurrentUser(null);
      }
    }, []);

    async function signUp(initialData)
    {
      console.log(initialData)
      try {
          const response = await axios.post(
            "http://localhost:5000/auth/register",initialData);
            console.log(initialData)
            console.log(response.data.user)
            localStorage.setItem("linkrruser", JSON.stringify(response.data.user));
            console.log("user signed up");
            setCurrentUser(response.data.user)
        } catch (error) {
          console.log("Error occured: ", error.message);
          return Promise.reject(error.message);
        }
  
    }

    async function logIn(initialData)
    {
      try {
          const response = await axios.post(
            "http://localhost:5000/auth/login",initialData);
            console.log(initialData)
            console.log(response)
            console.log(response.data.user)
            console.log("user signed up");
            localStorage.setItem("linkrruser", JSON.stringify(response.data.user));
            setCurrentUser(response.data.user)
          // return response.data;
        } catch (error) {
          console.log("Error occured: ", error.message);
          return Promise.reject(error.message);
        }  
    }


    async function logOut(){
      console.log("called")
      localStorage.removeItem("linkrruser");
setCurrentUser(null);
    }
    const value = 
    {
      currentUser, 
      setCurrentUser,
      signUp,
      logIn,
      logOut
     };
  
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }