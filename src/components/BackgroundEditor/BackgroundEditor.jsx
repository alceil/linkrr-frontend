import React,{useEffect,useRef} from 'react'
import { HexColorPicker } from "react-colorful";
import style from './styles.module.css'
import { BiImageAdd } from "react-icons/bi";
import { useAdmin } from '../../contexts/adminContext';

const BackgroundEditor = () => {
  const uploader = useRef(null);
  const { state,dispatch} = useAdmin();
  const {appearance,bgImgFile} = state;
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

    // await updateProfile(userData.userId, {
    //   page: {
    //     ...userData.page,
    //     appearance: { ...userData.page.appearance, background: null },
    //   },
    // });
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
<div className={style.color}> </div>
  </div>
  <div className={style.backgroundimage_editor}>
    {
      background? (<img
      src={background}
      alt=""
      className={style.backgroundImage}
    />):(
    <BiImageAdd size={200}/>
    )
    }
    <div className={style.bg_btngrp}>
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
    </div>
<h1>Background Image</h1>
  </div>
</div>
  )
}

export default BackgroundEditor