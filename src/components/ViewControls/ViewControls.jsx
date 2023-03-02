import React from 'react'
import { BiPaint } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { useView } from '../../contexts/viewContext';
import style from './styles.module.css'
import {
  HiOutlineLink,
  HiOutlineUpload,
} from "react-icons/hi";
const  ViewControls = () => {
  
  const {showDesign, setShowDesign,pagePreview, setPagePreview } = useView();
  return (
    <div className={style.viewcontrols_container}>

{
  showDesign?(
    <div className={style.viewcontrols_btn} onClick={()=>setShowDesign(!showDesign)}>
    <HiOutlineLink/>
    <span className={style.btn_title}>Links</span>
    </div>
  ):(

    <div className={style.viewcontrols_btn} onClick={()=>setShowDesign(!showDesign)}>
    <BiPaint/>
    <span className={style.btn_title}>Design</span>
    </div>
  )

}

    <div className={style.viewcontrols_btn} onClick={()=>setPagePreview(!pagePreview)}>
    <BsEye/>
    <span className={style.btn_title}>Preview</span>
    </div>
    <div className={style.viewcontrols_btn}>
    <HiOutlineUpload/>
    <span className={style.btn_title}>Save</span>
    </div>
  </div>
  )
}

export default ViewControls