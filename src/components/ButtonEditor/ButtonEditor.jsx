import React from 'react'
import { HexColorPicker } from "react-colorful";
import { useAdmin } from '../../contexts/adminContext';
import style from './styles.module.css'

const ButtonEditor = () => {
  const linkPresetColors = [
    "#000000",
    "#212529",
    "#ff5b5b",
    "#fca311",
    "#e5e5e5",
  ];

  const { state,dispatch} = useAdmin();
  const {appearance} = state;
  const { background, backgroundColor, linkColor, linkFontColor, linkStyle } =
  appearance;
  return (
<div className={style.btn_editor}>
  <div className={style.btncolour_editor}>
<HexColorPicker
              color={linkColor}
              onChange={(color) => {
                dispatch({
                  type: "field",
                  field: "appearance",
                  value: { ...appearance, linkColor: color },
                });
              }}HexColorPicker
style={{ width: "100%" }}
/>
<div className={style.colors}>

{linkPresetColors.map((presetColor) => (
                <button
                  key={presetColor}
                  className={style.colorbox}
                  style={{ background: presetColor }}
                  onClick={() => {
                    dispatch({
                      type: "field",
                      field: "appearance",
                      value: {
                        ...appearance,
                        linkColor: presetColor,
                      },
                    });
                  }}
                />
              ))}
</div>
<h1>
  Button Colour
</h1>
<div className={style.color}> </div>
  </div>
  <div className={style.btn_styles}>
    <div className={style.btn_styles_group}>
    <button 
    style={{ backgroundColor: linkColor, color: linkFontColor }}
    onClick={() => {
      dispatch({
        type: "field",
        field: "appearance",
        value: {
          ...appearance,
          linkStyle: { ...linkStyle, rounded: false },
        },
      });
    }}
    className={style.btn_style}
    >
      Rectangle
    </button>
    <button 
    style={{ backgroundColor: linkColor, color: linkFontColor }}
    onClick={() => {
      dispatch({
        type: "field",
        field: "appearance",
        value: {
          ...appearance,
          linkStyle: { ...linkStyle, rounded: true },
        },
      });
    }}
    className={`${style.btn_style} ${style.round_btn}`}
    >Rounded
    </button>
    <button 
     style={{ backgroundColor: linkColor, color: linkFontColor ,borderRadius: linkStyle.rounded ? "20px":"10px"}}
     onClick={() => {
       dispatch({
         type: "field",
         field: "appearance",
         value: {
           ...appearance,
           linkStyle: { ...linkStyle, filled: true },
         },
       });
     }}
    className={style.btn_style}
    >
      Filled 
    </button>
    <button 
    style={{ borderColor: linkColor,borderRadius: linkStyle.rounded ? "20px":"10px" }}
    onClick={() => {
      dispatch({
        type: "field",
        field: "appearance",
        value: {
          ...appearance,
          linkStyle: { ...linkStyle, filled: false },
        },
      });
    }}
    className={`${style.btn_style} ${style.outline_btn}`}>
      Outline
      </button>
    </div>


<h1>Button Style</h1>
  </div>
</div>
  )
}

export default ButtonEditor