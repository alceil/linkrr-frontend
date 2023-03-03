import React, { createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import { useAuth } from "./authContext";
const DataContext = createContext()
export function useData() {
    return useContext(DataContext);
  }


export function DataProvider({ children }) {

    const { currentUser } = useAuth();
    const [userData, setUserData] = useState(null);

   
    useEffect(() => {
        if (currentUser)  {
            fetch(`http://localhost:5000/auth/user/${currentUser._id}`)
            .then(response => response.json())
                // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => {
                console.log(data)
                setUserData(data);
            })
        } else {
          setUserData(null);
        }
      }, [currentUser]);

      async function updateProfile(initialData)
      {
        console.log("update called")
        console.log(initialData)
        try {
            const response = await axios.put(
              `http://localhost:5000/auth/updateProfilePage/${userData._id}`,initialData);
              console.log(initialData)
              console.log(response)
            if (response.data.success) {
              // localStorage.setItem(
              //   "login",
              //   JSON.stringify({
              //     token: response.data.user.token,
              //     isUserLoggedIn: true
              //   })
              // );
              // console.log(response.data.user)
              // console.log("user signed up");
              // setCurrentUser(response.data.user)
              // customToast("User SignUp Successful!");
            }
            // return response.data;
          } catch (error) {
            console.log("Error occured: ", error.message);
            return Promise.reject(error.message);
          }
    
      }


    const value =
     {
      userData,
      updateProfile
    };
  
    return (
      <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
  }