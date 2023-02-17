import React from 'react'
import { HexColorPicker } from "react-colorful";
import style from './styles.module.css'

const ButtonEditor = () => {
  return (
<div className={style.btn_editor}>
  <div className={style.btncolour_editor}>
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
  Button Colour
</h1>
<div className={style.color}> </div>
  </div>
  <div className={style.btn_styles}>
    <div className={style.btn_styles_group}>
    <button className={style.btn_style}>Rectangle</button>
    <button className={`${style.btn_style} ${style.round_btn}`}>Rounded</button>
    <button className={style.btn_style}>Filled </button>
    <button className={`${style.btn_style} ${style.outline_btn}`}>Outline</button>
    </div>


<h1>Button Style</h1>
  </div>
</div>
  )
}

export default ButtonEditor