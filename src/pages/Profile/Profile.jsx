import React from 'react'
import style from './styles.module.css'
const Profile = () => {
  return (
<div className={style.Container}>
      <div className={style.login_container}>
      <h1 className={style.login_content}>Account Information</h1>
   
      <form  className={style.input_container}>
      <h1 className={style.login_content}>username</h1>
      <input type="text" value='Ashish' className={style.input_field}/>
      <h1 className={style.login_content}>email</h1>
      <input type="email"  value='ashishshajisrampickal@gmail.com' className={style.input_field}/>
      <div className={style.btn_container}>
      <button className={style.login_btn}>Save Changes</button>
      </div>
      </form>
      </div>

    </div>
  )
}

export default Profile