import React from 'react'
import { useAdmin } from '../../contexts/adminContext';
import style from './styles.module.css'
const ButtonFontEditor = () => {
  const linkfontColors = ["#fff", "#e5e5e5", "#212529", "#000"];
  const { state,dispatch} = useAdmin();
  const {appearance} = state;
  return (
<div className={style.btn_font_colour}>
<h1>Button Font Color</h1>
<div className={style.colors}>
{linkfontColors.map((presetColor) => (
            <div
              key={presetColor}
              className={style.colorbox}
              style={{ background: presetColor }}
              onClick={() => {
                dispatch({
                  type: "field",
                  field: "appearance",
                  value: {
                    ...appearance,
                    linkFontColor: presetColor,
                  },
                });
              }}
            />
          ))}
</div>
</div>
  )
}

export default ButtonFontEditor