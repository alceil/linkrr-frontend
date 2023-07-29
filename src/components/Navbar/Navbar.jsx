import React from 'react'
import style from './styles.module.css'
import { useView } from '../../contexts/viewContext'
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/authContext';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { useDarkMode } from "../../contexts/darkModeContext";
const Navbar = () => {
  const {showProfile, setShowProfile } =useView() ;
  const {logOut,currentUser} = useAuth();
  const { dark, setDark } = useDarkMode();


  const handleDark = () => {
    if (dark) {
      window.document.documentElement.classList.remove("dark");
    } else {
      window.document.documentElement.classList.add("dark");
    }
    localStorage.setItem("dark", JSON.stringify(!dark));
    setDark(!dark);
  };
  return (
    <header className={style.nav_container}>
        <h1 className={style.logo}>Linkrr</h1>
          {currentUser?
            (
              showProfile?
            (
              <div style={{ display:'flex',alignItems:'center' }}>
                   <Link to="/" style={{ textDecoration: 'none' }}>
                   <button
                       onClick={logOut}
               className={style.logout_btn}>
                Log Out
                </button>
                   </Link>

              <Link to="/admin" style={{ textDecoration: 'none' }}>

              <button className={style.nav_btn}  onClick={()=>setShowProfile(!showProfile)}>Admin</button>
              </Link>
              {dark ? (
          <BsFillMoonStarsFill
            size={25}
            style={{color:'#7964ff'}}
            onClick={handleDark}
          />
        ) : (
          <MdLightMode
            size={25}
            style={{color:'#7964ff'}}
            onClick={handleDark}
          />
        )}

              </div>
            ):(
              <div style={{display:'flex',alignItems:'center' ,gap:'5px',marginRight:'5px'}}>
                             <Link to="/" style={{ textDecoration: 'none' }}>
                             <button 
                              className={style.logout_btn}
                              onClick={logOut}
                              >Log Out</button>

                             </Link>

              <Link to="/profile" style={{ textDecoration: 'none' }}>
              <button className={style.nav_btn} onClick={()=>setShowProfile(!showProfile)}>My Account</button>

              </Link>


          
     {dark ? (
          <BsFillMoonStarsFill
            size={25}
            style={{color:'#7964ff'}}
            onClick={handleDark}
          />
        ) : (
          <MdLightMode
            size={25}
            style={{color:'#7964ff'}}
            onClick={handleDark}
          />
        )}
              </div>

            )
            ):null
          }
         {!currentUser?(
<>
{dark ? (
          <BsFillMoonStarsFill
            size={25}
            style={{color:'#7964ff'}}
            onClick={handleDark}
          />
        ) : (
          <MdLightMode
            size={25}
            style={{color:'#7964ff'}}
            onClick={handleDark}
          />
        )}
</>
         ):null
}

    </header>
  )
}

export default Navbar