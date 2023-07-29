import React,{useEffect,useRef} from 'react'
import { HexColorPicker } from "react-colorful";
import style from './styles.module.css'
import { BiImageAdd } from "react-icons/bi";
import { useAdmin } from '../../contexts/adminContext';
import axios from "axios";
import { useData } from '../../contexts/dataContext';

const BackgroundEditor = () => {
  const uploader = useRef(null);
  const { state,dispatch} = useAdmin();
  const { userData, updateProfile } = useData();
  const {appearance,bgImgFile,loading} = state;
  const {backgroundColor,background} = appearance;
    const backgroundPresetColors = [
    "#000000",
    "#212529",
    "#ff5b5b",
    "#fca311",
    "#e5e5e5",
  ];
  const handleFile = (event) => {
    event.preventDefault();

    dispatch({
      type: "field",
      field: "bgImgFile",
      value: event.target.files[0],
    });
  };


  const handleCancel = () => {
    // dispatch({
    //   type: "field",
    //   field: "appearance",
    //   value: {
    //     ...appearance,
    //     background: userData.page.appearance.background,
    //   },
    // });
    dispatch({ type: "field", field: "bgImgFile", value: null });
  };
  const handleRemove = async () => {
    dispatch({
      type: "field",
      field: "appearance",
      value: { ...appearance, background: null },
    });

    await updateProfile( {
      page: {
        ...userData.page,
        appearance: { ...userData.page.appearance, background: null },
      },
    });
  };

  const handleUpload = async () => {
    dispatch({ type: "update" });

    if (bgImgFile) {
      try {
let reader = new FileReader();
reader.readAsDataURL(bgImgFile);

reader.onload = async () => {
  const formData = new FormData();
  formData.append(
    "image",
    reader.result.slice(bgImgFile.type === "image/png" ? 22 : 23)
  );
  formData.append("name", bgImgFile.name);
  formData.append("key", process.env.REACT_APP_PUBLIC_IMGBB_STORAGE_KEY);
  console.log(process.env.REACT_APP_PUBLIC_IMGBB_STORAGE_KEY);
  const response =await axios
    .post("https://api.imgbb.com/1/upload", formData);
  
    let imageUrl = response.data.data.url;
if(imageUrl){
  console.log("profile updated")
  await updateProfile({
    page: {
      ...userData.page,
      appearance: {
        ...userData.page.appearance,
        background: imageUrl,
      },
    },
  }
  ); 
}

   
};


        dispatch({ type: "success" });
      } catch (error) {
        dispatch({ type: "error", error: error.message });
      }
    }
  };


  useEffect(() => {
    if (bgImgFile) {
      const reader = new FileReader();

      reader.onload = function (e) {
        dispatch({
          type: "field",
          field: "appearance",
          value: { ...appearance, background: e.target.result },
        });
      };

      reader.readAsDataURL(bgImgFile);
    }
  }, [bgImgFile]);


  return (
<div className={style.background_editor}>
  <div className={style.backgroundcolour_editor}>
<HexColorPicker
style={{ width: "100%" }}
color={backgroundColor}
onChange={(color)=>{
                  dispatch({
                  type: "field",
                  field: "appearance",
                  value: { ...appearance, backgroundColor: color },
                });

}}
/>
<div className={style.colors}>

  {
    backgroundPresetColors.map((presetColor) => (
      <div 
      className={style.colorbox} 
      style={{ backgroundColor:presetColor}}
      onClick={()=>{
        dispatch({
          type: "field",
          field: "appearance",
          value: {
            ...appearance,
            backgroundColor: presetColor,
          },
        });
      }}
      >
     </div>

    ))}

</div>
<h1>
  Background Colour
</h1>
  </div>
  <div className={style.backgroundimage_editor}>
    {
      background? (<img
      src={background}
      alt=""
      className={style.backgroundImage}
    />):(
    <BiImageAdd size={200} style={{color:'grey'}}/>
    )
    }
    <div className={style.bg_btngrp}>
      {
        bgImgFile?
        (
          <>
            <button 
    className={style.bg_btn}
    onClick={handleCancel}
    >Cancel</button>
<button 
className={style.bg_btn}
onClick={handleUpload}
>
{loading ? "Uploading" : "Upload"}
  </button>
          </>

        ):
        (
<>
<button 
    className={style.bg_btn}
    onClick={handleRemove}
    >Remove</button>
<button 
className={style.bg_btn}
onClick={() => uploader?.current?.click()}
>
  Change
  <input
                        className="hidden"
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
<h1>Background Image</h1>
  </div>
</div>
  )
}

export default BackgroundEditor