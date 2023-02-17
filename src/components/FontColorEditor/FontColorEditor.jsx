import React from 'react'
import style from './styles.module.css'
import { useAdmin } from '../../contexts/adminContext';
const FontColorEditor = () => {
    const fontColors = ["#fff", "#e5e5e5", "#212529", "#000"];
    const { state,dispatch} = useAdmin();
    const {appearance} = state;
  return (
<div className={style.font_colour}>
<h1>Font Color</h1>
<div className={style.colors}>
  {fontColors.map((presetColor) => (
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
                    fontColor: presetColor,
                  },
                });
              }}
            />
          ))}

</div>
</div>
  )
}

export default FontColorEditor