import React from 'react'
import style from './styles.module.css'
const AddSocials = () => {
  return (
    <div className={style.addsocials_container}>
    <h1 className={style.addsocials_title}>Social Icons</h1>
    <input type="name" placeholder='Twitter handle' className={style.addsocials_inputfield}/>
    <input type="name" placeholder='Instagram handle' className={style.addsocials_inputfield}/>
    <input type="name" placeholder='Facebook handle' className={style.addsocials_inputfield}/>
    <input type="name" placeholder='Linkedin handle' className={style.addsocials_inputfield}/>
    </div>
  )
}

export default AddSocials