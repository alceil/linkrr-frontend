import React from 'react'
import { HexColorPicker } from "react-colorful";
import style from './styles.module.css'
import { BiImageAdd } from "react-icons/bi";

const BackgroundEditor = () => {
  return (
<div className={style.background_editor}>
  <div className={style.backgroundcolour_editor}>
<HexColorPicker
style={{ width: "100%" }}
/>
<div className={style.colors}>

<div className={`${style.colorbox} ${style.red}`}> </div>
<div className={`${style.colorbox} ${style.green}`}> </div>
<div className={`${style.colorbox} ${style.blue}`}> </div>
<div className={`${style.colorbox} ${style.purple}`}> </div>
</div>
<h1>
  Background Colour
</h1>
<div className={style.color}> </div>
  </div>
  <div className={style.backgroundimage_editor}>
    <BiImageAdd size={200}/>
    <div className={style.bg_btngrp}>
    <button className={style.bg_btn}>Remove</button>
<button className={style.bg_btn}>Change</button>
    </div>
<h1>Background Image</h1>
  </div>
</div>
  )
}

export default BackgroundEditor