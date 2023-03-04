import React from 'react'
import style from './styles.module.css'
import { useView } from '../../contexts/viewContext'
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/authContext';
const Navbar = () => {
  const {showProfile, setShowProfile } =useView() ;
  const {logOut,currentUser} = useAuth();
  return (
    <div className={style.nav_container}>
        <h1 className={style.logo}>Linkrr</h1>
          {currentUser?
            (
              showProfile?
            (
              <div>
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

              </div>
            ):(
              <div>
                              <button className={style.logout_btn}>Log Out</button>
              <Link to="/profile" style={{ textDecoration: 'none' }}>
              <button className={style.nav_btn} onClick={()=>setShowProfile(!showProfile)}>My Account</button>

              </Link>
              </div>

            )
            ):null
          }
     

    </div>
  )
}

export default Navbar