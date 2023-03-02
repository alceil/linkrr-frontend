import React from 'react'
import style from './styles.module.css'
const LinkCard = ({  link,linkStyle,linkColor,linkFontColor}) => {
  return (

  <a 
  href={link.url} 
  className={style.linkCard}
  style={{
    background: linkStyle.filled ? linkColor : "",
    border: linkStyle.filled ? "none" : `2px solid ${linkColor}`,
    color: linkFontColor,
  }}>
<p className={style.linkCard_title}>{link.title}</p>
<p className={style.linkCard_description}>{link.description}</p>
  </a>

  )
}

export default LinkCard