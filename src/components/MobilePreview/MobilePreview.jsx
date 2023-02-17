import React from 'react'
import style from './styles.module.css'
import { useAdmin } from "../../contexts/adminContext";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";
const MobilePreview = () => {
const { state} = useAdmin();
const {  profileName,about,socials} = state;
  return (
    <div className={style.mobilepreview_container}>
    <div className={style.profilepic_container}>
    <div className={style.profile_avatar}>
      <svg stroke="currentColor" className={style.avatar_icon} fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-full w-full text-gray-400" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">
        </path>
        </svg>
      </div>
      <span className={style.profile_username}>{profileName}</span>
    </div>
<p className={style.about}>
  {about}
</p>
<div className={style.social_container}>
<div className={style.socials}>
{socials.twitter && (
  <a
  rel="noreferrer"
  target="_blank"
  href={`https://twitter.com/${socials.twitter}`}>
    <FiTwitter
size={25}
/>
  </a>
)} 
{socials.linkedin && (
  <a
  rel="noreferrer"
  target="_blank"
  href={socials.linkedin}>
<FiLinkedin
size={25}
/>
  </a>

)} 

{socials.github && (
  <a
  rel="noreferrer"
  target="_blank"
  href={`https://github.com/${socials.github}`}>
<FiGithub
size={25}
/>
  </a>

)} 

{socials.instagram && (
  <a
  rel="noreferrer"
  target="_blank"
  href={`https://instagram.com/${socials.instagram}`}>
<FiInstagram
size={25}
/>
  </a>

)} 
{socials.facebook && (
  <a
  rel="noreferrer"
  target="_blank"
  href={`https://facebook.com/${socials.facebook}`}>
<FiFacebook
size={25}
/>
  </a>

)} 



</div>
</div>

    <h1 className={style.website_name}>
      Linkrr
    </h1>
              </div>
  )
}

export default MobilePreview