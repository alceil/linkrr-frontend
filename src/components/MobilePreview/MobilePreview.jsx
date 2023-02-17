import React from 'react'
import style from './styles.module.css'
const MobilePreview = () => {
  return (
    <div className={style.mobilepreview_container}>
    <div className={style.profilepic_container}>
    <div className={style.profile_avatar}>
      <svg stroke="currentColor" className={style.avatar_icon} fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-full w-full text-gray-400" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">
        </path>
        </svg>
      </div>
      <span className={style.profile_username}>@alceil</span>
    </div>
    <h1 className={style.website_name}>
      Linkrr
    </h1>
              </div>
  )
}

export default MobilePreview