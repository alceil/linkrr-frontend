import React from 'react'
import { BiPaint } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { MdSaveAlt } from "react-icons/md";
import style from './styles.module.css'
const ViewControls = () => {
  return (
    <div className={style.viewcontrols_container}>
    <div className={style.viewcontrols_btn}>
    <BiPaint/>
    <span className={style.btn_title}>Design</span>
    </div>
    <div className={style.viewcontrols_btn}>
    <BsEye/>
    <span className={style.btn_title}>Preview</span>
    </div>
    <div className={style.viewcontrols_btn}>
    <MdSaveAlt/>
    <span className={style.btn_title}>Save</span>
    </div>
  </div>
  )
}

export default ViewControls