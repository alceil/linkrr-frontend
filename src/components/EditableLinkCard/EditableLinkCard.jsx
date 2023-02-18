import React from 'react'
import style from './styles.module.css'
import { GoTrashcan } from "react-icons/go";
import { MdDragIndicator } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import {  useState } from "react";
const EditableLinkCard = () => {
    const [isToggled, toggle] = useState(false)
    const [showEditCard, setShowEditCard] = useState(false)
  return (
<div className={style.editable_linkcard_container}>

{
  showEditCard?(
<div className={style.editable_linkcard}>
<input 
    type="name" 
    placeholder='Title' 
    // value={twitter} 
    className={style.editablelinkcard_inputfield}
    // onChange={(e) =>
    //   dispatch({
    //     type: "field",
    //     field: "socials",
    //     value: { ...state.socials, twitter: e.target.value },
    //   })
    // }
    />

<input 
    type="name" 
    placeholder='Url' 
    // value={twitter} 
    className={style.editablelinkcard_inputfield}
    // onChange={(e) =>
    //   dispatch({
    //     type: "field",
    //     field: "socials",
    //     value: { ...state.socials, twitter: e.target.value },
    //   })
    // }
    />
    
<input 
    type="name" 
    placeholder='Description' 
    // value={twitter} 
    className={style.editablelinkcard_inputfield}
    // onChange={(e) =>
    //   dispatch({
    //     type: "field",
    //     field: "socials",
    //     value: { ...state.socials, twitter: e.target.value },
    //   })
    // }
    />
    <div className={style.btn_group}>
<button className={style.editcard_btn} onClick={()=>{setShowEditCard(!showEditCard)}}>Cancel</button>
<button className={style.editcard_btn}>Save</button>
</div>
  </div>
  ):(
    <div className={style.editable_linkcard_preview}>
    <HiOutlinePencil onClick={()=>{setShowEditCard(!showEditCard)}}/>
    <div className={style.editbtn_group}>
    <label className={style.checkbox_label}>
                <input type="checkbox" className={style.checkbox} defaultChecked={isToggled} onClick={()=>toggle(!isToggled)} />
                <span className={style.checkbox_span}/>
            </label>
    <GoTrashcan className={style.edit_icon}/>
    
    </div>
      </div>

  )
}
<MdDragIndicator size={40}/>
</div>
  )
}

export default EditableLinkCard