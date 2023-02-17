import React from 'react'
import { HexColorPicker } from "react-colorful";
import style from './styles.module.css'
import { BiImageAdd } from "react-icons/bi";
import { useAdmin } from '../../contexts/adminContext';

const BackgroundEditor = () => {
  const { state,dispatch} = useAdmin();
  const {appearance} = state;

    const backgroundPresetColors = [
    "#000000",
    "#212529",
    "#ff5b5b",
    "#fca311",
    "#e5e5e5",
  ];
  return (
<div className={style.background_editor}>
  <div className={style.backgroundcolour_editor}>
<HexColorPicker
style={{ width: "100%" }}

onChange={(color)=>{
                  dispatch({
                  type: "field",
                  field: "appearance",
                  value: { ...appearance, backgroundColor: color },
                });

}}
/>
<div className={style.colors}>

  {
    backgroundPresetColors.map((presetColor) => (
      <div 
      className={style.colorbox} 
      style={{ backgroundColor:presetColor}}
      onClick={()=>{
        dispatch({
          type: "field",
          field: "appearance",
          value: {
            ...appearance,
            backgroundColor: presetColor,
          },
        });
      }}
      >
     </div>

    ))}

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