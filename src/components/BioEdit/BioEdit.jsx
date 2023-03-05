import React,{useEffect,useRef} from 'react'
import style from './styles.module.css'
import axios from "axios";
import { useAdmin } from "../../contexts/adminContext";
import { BsPersonFill } from "react-icons/bs";
import { useData } from '../../contexts/dataContext';
const BioEdit = () => {
  const uploader = useRef(null);
  const { state, dispatch } = useAdmin();
  const { userData, updateProfile } = useData();
   const { profileName,about, imgFile,imgSrc} =state;
  const handleFile = (event) => {
    event.preventDefault();

    dispatch({ type: "field", field: "imgFile", value: event.target.files[0] });
  };

  const handleCancel = () => {
    dispatch({ type: "field", field: "imgSrc", value: userData.page.imgSrc });
    dispatch({ type: "field", field: "imgFile", value: null });
  };


  const handleRemove = async () => {
    dispatch({ type: "field", field: "imgSrc", value: null });

    await updateProfile({
      page: { ...userData.page, imgSrc: null },
    });
  };

  const handleUpload = () => {
    dispatch({ type: "update" });

    if (imgFile) {
          try {
            let reader = new FileReader();
reader.readAsDataURL(imgFile);
            reader.onload = async () => {
              const formData = new FormData();
              formData.append(
                "image",
                reader.result.slice(imgFile.type === "image/png" ? 22 : 23)
              );
              formData.append("name", imgFile.name);
              formData.append("key", process.env.REACT_APP_PUBLIC_IMGBB_STORAGE_KEY);
              console.log(process.env.REACT_APP_PUBLIC_IMGBB_STORAGE_KEY);
              const response =await axios
                .post("https://api.imgbb.com/1/upload", formData);
                let imageUrl = response.data.data.url;
            if(imageUrl){
              console.log("profile updated")
              await updateProfile(userData.userId, {
                page: { ...userData.page, imgSrc: imageUrl },
              });
            }
            
               
            };

            dispatch({ type: "success" });
          } catch (error) {
            dispatch({ type: "error", error: error.message });
          }
    }
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

<div className={style.bio_btn_group}>
{
      imgFile?
      (
<>
<button 
   className={style.bio_btn}
   onClick={handleCancel}>
    Cancel
    </button>
<button 
                  onClick={handleUpload}
                  className={style.bio_btn} >

  Upload
  </button>
</>
      ):
      (
<>
<button 
   className={style.bio_btn}
   onClick={handleRemove}>
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
</>
      )
    }
</div>


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