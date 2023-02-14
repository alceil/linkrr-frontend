import React from 'react'
import style from './styles.module.css'
const LinkAdd = () => {
  return (
<div className={style.link_container}>
<button className={style.addlink_btn}>Add Links</button>
<button className={style.explore_btn}>Explore Links</button>
</div>
  )
}

export default LinkAdd