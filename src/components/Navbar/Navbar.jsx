import React from 'react'
import style from './styles.module.css'
import { useView } from '../../contexts/viewContext'
import { Link } from "react-router-dom";
const Navbar = () => {
  const {showProfile, setShowProfile } =useView() ;
  return (
    <div className={style.nav_container}>
        <h1 className={style.logo}>Linkrr</h1>
          {
            showProfile?
            (
              <div>
              <button className={style.logout_btn}>Log Out</button>
              <Link to="/admin" style={{ textDecoration: 'none' }}>

              <button className={style.nav_btn}  onClick={()=>setShowProfile(!showProfile)}>Admin</button>
              </Link>

              </div>
            ):(
              <Link to="/profile" style={{ textDecoration: 'none' }}>
              <button className={style.nav_btn} onClick={()=>setShowProfile(!showProfile)}>My Account</button>

              </Link>
            )
          }
     

    </div>
  )
}

export default Navbar