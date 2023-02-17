import React from 'react'
import style from './styles.module.css'
const FontColorEditor = () => {
  return (
<div className={style.font_colour}>
<h1>Font Color</h1>
<div className={style.colors}>

<div className={`${style.colorbox} ${style.red}`}> </div>
<div className={`${style.colorbox} ${style.green}`}> </div>
<div className={`${style.colorbox} ${style.blue}`}> </div>
<div className={`${style.colorbox} ${style.purple}`}> </div>
</div>
</div>
  )
}

export default FontColorEditor