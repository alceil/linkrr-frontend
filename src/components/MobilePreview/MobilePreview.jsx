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
import { BsPersonFill } from "react-icons/bs";
import LinkCard from '../LinkCard/LinkCard';
const MobilePreview = () => {
const { state} = useAdmin();
const {  username,profileName,about,socials,appearance,links,imgSrc} = state;
const { 
  background,
  backgroundColor, 
  fontColor,
  linkColor, 
  linkFontColor, 
  linkStyle } = appearance;

  return (
    <div style=
    {
      {
        backgroundImage: `url(${background})`,
        backgroundColor:backgroundColor,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: fontColor,
      }
    } className={style.mobilepreview_container}>
    <div className={style.profilepic_container}>
        {imgSrc?(<img
    className={style.profile_avatar}
    src={imgSrc}
    alt=""/>):( 
    <div className={style.profile_avatar}>
      <BsPersonFill size={30}/>  
      </div>)
  }
      <span className={style.profile_username}>{profileName?profileName:username}</span>
    </div>
<p className={style.about}>
  {about}
</p>
<div className={style.linkCard_container}>
{links
          ?.filter((link) => link.active !== false && link.title && link.link)
          .map((link) => {
            return (
              <LinkCard
                key={link.title}
                link={link}
                linkStyle={linkStyle}
                linkColor={linkColor}
                linkFontColor={linkFontColor}
              />
            );
          })}
</div>
<div className={style.social_container}>
<div className={style.socials}>
{socials.twitter && (
  <a
  rel="noreferrer"
  target="_blank"
  href={`https://twitter.com/${socials.twitter}`}>
    <FiTwitter
size={25}
style={{color:fontColor}}
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
style={{color:fontColor}}
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
style={{color:fontColor}}
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
style={{color:fontColor}}
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
style={{color:fontColor}}
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