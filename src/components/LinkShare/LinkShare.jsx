import React from 'react'
import style from './styles.module.css'
import { BiCopy } from "react-icons/bi";

const LinkShare = ({username}) => {
  return (
    <div className={style.share_link}>
    <a href ={`https://linkpile-bffd7.web.app/${username}`} className={style.link}>{`https://linkpile-bffd7.web.app/${username}`}</a>
    <BiCopy style={{color:'grey'}}/>
              </div>
  )
}

export default LinkShare