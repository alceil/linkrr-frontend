import React, { createContext, useContext, useState} from "react";
import axios from "axios";
const AuthContext = createContext()
export function useAuth() {
    return useContext(AuthContext);
  }

 

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    async function signUp(initialData)
    {
      console.log(initialData)
      try {
          const response = await axios.post(
            "http://localhost:5000/auth/register",initialData);
            console.log(initialData)
            console.log(response)
            console.log(response.data.user)
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
            setCurrentUser(response.data.user)
          // return response.data;
        } catch (error) {
          console.log("Error occured: ", error.message);
          return Promise.reject(error.message);
        }
  
    }
    const value = 
    {
      currentUser, 
      setCurrentUser,
      signUp,
      logIn
     };
  
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }