import React from 'react'
import style from './styles.module.css'
import { BiCopy } from "react-icons/bi";

const LinkShare = () => {
  return (
    <div className={style.share_link}>
    <a href ="https://linkpile-bffd7.web.app/alceil" className={style.link}>https://linkpile-bffd7.web.app/alceil</a>
    <BiCopy/>
              </div>
  )
}

export default LinkShare