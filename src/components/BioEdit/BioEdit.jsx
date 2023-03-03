import React,{useEffect,useRef} from 'react'
import style from './styles.module.css'
import { useAdmin } from "../../contexts/adminContext";
import { BsPersonFill } from "react-icons/bs";
const BioEdit = () => {
  const uploader = useRef(null);
  const { state, dispatch } = useAdmin();
   const { profileName,about, imgFile,imgSrc} =state;
  const handleFile = (event) => {
    event.preventDefault();

    dispatch({ type: "field", field: "imgFile", value: event.target.files[0] });
  };

  const handleCancel = () => {
    dispatch({ type: "field", field: "imgSrc", value:null });
    dispatch({ type: "field", field: "imgFile", value: null });
  };
  useEffect(() => {
    if (imgFile) {
      const reader = new FileReader();

      reader.onload = function (e) {
        dispatch({ type: "field", field: "imgSrc", value: e.target.result });
      };

      reader.readAsDataURL(imgFile);
    }
  }, [imgFile]);
  return (
<div className={style.bio_container}>

<div className={style.changeprofile_container}>
{imgSrc?(<img
    className={style.profile_pic}
    src={imgSrc}
    alt=""/>):( 
    <div className={style.profile_pic}>
      <BsPersonFill size={60}/>  
      </div>)
  }

  <div>
  <button 
   className={style.bio_btn}
   onClick={handleCancel}>
    Remove
    </button>
<button 
                  onClick={() => uploader?.current?.click()}
                  className={style.bio_btn} >

  Change

  <input
                  aria-label="profile pic"
                  type="file"
                  accept="image/png, image/jpeg"
                  style={{display: 'none'}}
                  onChange={handleFile}
                  ref={uploader}
                />

  </button>
  </div>

</div>
<label  className={style.bio_label}>Profile Title</label>
<input 
  type="name"
  value={profileName} 
  placeholder='@yourname' 
  className={style.bio_input_field} 
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
    value={about}
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