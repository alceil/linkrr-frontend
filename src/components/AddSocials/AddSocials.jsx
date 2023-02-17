import React from 'react'
import style from './styles.module.css'
import { useAdmin } from "../../contexts/adminContext";
const AddSocials = () => {
  const { state, dispatch } = useAdmin();
  const {
    twitter,
    instagram,
    facebook,
    linkedin,
    github,
  } = state.socials;

  return (
    <div className={style.addsocials_container}>
    <h1 className={style.addsocials_title}>Social Icons</h1>
    <input 
    type="name" 
    placeholder='Twitter handle' 
    value={twitter} 
    className={style.addsocials_inputfield}
    onChange={(e) =>
      dispatch({
        type: "field",
        field: "socials",
        value: { ...state.socials, twitter: e.target.value },
      })
    }
    />
    <input 
    type="name" 
    placeholder='Instagram handle' 
    value={instagram} 
    className={style.addsocials_inputfield}
        onChange={(e) =>
      dispatch({
        type: "field",
        field: "socials",
        value: { ...state.socials, instagram: e.target.value },
      })
    }
    />
    <input 
    type="name" 
    placeholder='Facebook handle' 
    value={facebook} 
    className={style.addsocials_inputfield}
        onChange={(e) =>
      dispatch({
        type: "field",
        field: "socials",
        value: { ...state.socials, facebook: e.target.value },
      })
    }
    />
    <input 
    type="name" 
    placeholder='Linkedin handle' 
    value={linkedin} 
    className={style.addsocials_inputfield}
        onChange={(e) =>
      dispatch({
        type: "field",
        field: "socials",
        value: { ...state.socials, linkedin: e.target.value },
      })
    }
    />
    <input 
    type="name" 
    placeholder='GitHub handle' 
    value={github} 
    className={style.addsocials_inputfield}
        onChange={(e) =>
      dispatch({
        type: "field",
        field: "socials",
        value: { ...state.socials, github: e.target.value },
      })
    }
    />
    </div>
  )
}

export default AddSocials