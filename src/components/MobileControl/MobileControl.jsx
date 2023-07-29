import React from 'react'
import { BiPaint } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { useView } from '../../contexts/viewContext';
import style from './styles.module.css'
import {
  HiOutlineLink,
  HiOutlineUpload,
} from "react-icons/hi";
import { ImSpinner } from "react-icons/im";
import { useAdmin } from '../../contexts/adminContext';
import { useData } from '../../contexts/dataContext';
const  MobileControl = () => {
  const { userData, updateProfile } = useData();
  const { state, dispatch } = useAdmin();
  const { profileName, about, links, appearance, socials, loading } =
    state;
  const {showDesign, setShowDesign,pagePreview, setPagePreview } = useView();
  const handleUpdate = async (event) => {
    event.preventDefault();

    dispatch({ type: "update" });

    try {
      await updateProfile({
        page: {
          ...userData.page,
          profileName: profileName,
          about: about,
          links: links,
          appearance: appearance,
          socials: socials,
        },
      });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error", error: error.message });
    }
  };
  return (

    
    <div className={style.viewcontrols_container}>
{
 
  showDesign?(
    <div className={style.viewcontrols_btn} onClick={()=>setShowDesign(!showDesign)}>
    <HiOutlineLink style={{color:'grey'}}/>
    <span className={style.btn_title}>Links</span>
    </div>
  ):(

    <div className={style.viewcontrols_btn} onClick={()=>setShowDesign(!showDesign)}>
    <BiPaint style={{color:'grey'}}/>
    <span className={style.btn_title}>Design</span>
    </div>
  )

}

    <div className={style.viewcontrols_btn} onClick={()=>setPagePreview(!pagePreview)}>
    <BsEye style={{color:'grey'}}/>
    <span className={style.btn_title}>Preview</span>
    </div>
    <div 
    className={style.viewcontrols_btn}
    onClick={handleUpdate}>
   {loading ? (
                <ImSpinner  style={{color:'grey'}}/>
              ) : (
                <HiOutlineUpload
                style={{color:'grey'}}
                />
              )}
    <span className={style.btn_title}>
    {loading ? "Saving" : "Save"}
      </span>
    </div>

  </div>
  )
}

export default MobileControl