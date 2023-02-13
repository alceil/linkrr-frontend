import React from 'react'
import style from './styles.module.css'
import { BiCopy } from "react-icons/bi";

const LinkShare = () => {
  return (
    <div className={style.share_link}>
    <h1 className={style.link}>https://linkpile-bffd7.web.app/alceil</h1>
    <BiCopy/>
              </div>
  )
}

export default LinkShare