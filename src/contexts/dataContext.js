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

      async function updateProfile(initialData){
        try {
            const response = await axios.put(
              `http://localhost:5000/auth/updateProfilePage/${userData._id}`,initialData);
              console.log(response)
            // return response.data;
          } catch (error) {
            console.log("Error occured: ", error.message);
            return Promise.reject(error.message);
          }
    
      }
      const getImageUrl =async (file) => {
        let reader = new FileReader();
        let imageUrl = '';
        reader.readAsDataURL(file);
    
        reader.onload = async () => {
          const formData = new FormData();
          formData.append(
            "image",
            reader.result.slice(file.type === "image/png" ? 22 : 23)
          );
          formData.append("name", file.name);
          formData.append("key", process.env.REACT_APP_PUBLIC_IMGBB_STORAGE_KEY);
          console.log(process.env.REACT_APP_PUBLIC_IMGBB_STORAGE_KEY);
          const response =await axios
            .post("https://api.imgbb.com/1/upload", formData);
            imageUrl = response.data.data.url;
        };


      };

    const value =
     {
      userData,
      updateProfile,
      getImageUrl
    };
  
    return (
      <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
  }