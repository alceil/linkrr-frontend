import React from 'react'
import style from './styles.module.css'
import { useAdmin } from "../../contexts/adminContext";
const BioEdit = () => {
  const { state, dispatch } = useAdmin();
  return (
<div className={style.bio_container}>

<div className={style.changeprofile_container}>
  <div className={style.profile_pic}>
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-full w-full text-gray-400" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">
    </path>
    </svg>
  </div>
  <div>
  <button className={style.bio_btn}>Remove</button>
<button className={style.bio_btn}>Change</button>
  </div>

</div>
<label  className={style.bio_label}>Profile Title</label>
<input type="name" placeholder='@yourname' className={style.bio_input_field} 
 onChange={(e) =>
  dispatch({
    type: "field",
    field: "profileName",
    value: e.target.value,
  })
}
/>
<label  className={style.bio_label}>Profile Description</label>
    <textarea 
    className={style.bio_input_field} 
    placeholder='Bio'
    onChange={(e) =>
      dispatch({
        type: "field",
        field: "about",
        value: e.target.value,
      })}
    >

    </textarea>
</div>
  )
}

export default BioEdit