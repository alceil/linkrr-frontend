import React from 'react'
import style from './styles.module.css'
import { GoTrashcan } from "react-icons/go";
import { MdDragIndicator } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";
import { HiOutlinePencil } from "react-icons/hi";
import {  useEffect,useState } from "react";
import { useAdmin } from '../../contexts/adminContext';
const EditableLinkCard = ({id,Link}) => {
    const [showEditCard, setShowEditCard] = useState(false)
    const { state, dispatch } = useAdmin();
    const { links } = state;
  
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    const [active, setActive] = useState(false);
  
    const handleEdit = (value) => {
      const updatedLinks = links;
  
      updatedLinks[id] = value;
  
      dispatch({ type: "field", field: "links", value: updatedLinks });
    };
  
    const handleRemoveLink = () => {
      const updatedLinks = links.filter((_, index) => id !== index);
  
      dispatch({ type: "field", field: "links", value: updatedLinks });
    };
  
    const handleSave = () => {
      handleEdit({
        title: title,
        link: link,
        description: description,
        active: active,
      });
      setShowEditCard(!showEditCard)
    };
  
    const handleCancel = () => {
      setTitle(Link.title);
      setLink(Link.link);
      setDescription(Link.description);
      setActive(Link.active);
      setShowEditCard(!showEditCard)
    };
  
    const handleChecked = (e) => {
      setActive(e.target.checked);
      handleEdit({
        title: title,
        link: link,
        description: description,
        active: e.target.checked,
      });
    };

    useEffect(() => {
        console.log("Useeffect triggrere")
        if (Link) {
          setTitle(Link.title);
          setLink(Link.link);
          setDescription(Link.description);
          setActive(true);
        }
      }, [Link]);
  return (
    // <Draggable
    // key={Link.title || id}
    // draggableId={Link.title || `${id}`}
    // index={id}
    // >
<div className={style.editable_linkcard_container}>

{
  showEditCard?(
<div className={style.editable_linkcard}>
<input 
    type="name" 
    placeholder='Title' 
    value={title} 
    className={style.editablelinkcard_inputfield}
    onChange={(e) => setTitle(e.target.value)}
    />

<input 
    type="name" 
    placeholder='Url' 
    value={link} 
    className={style.editablelinkcard_inputfield}
    onChange={(e) => setLink(e.target.value)}
    />
    
<input 
    type="name" 
    placeholder='Description' 
    value={description} 
    className={style.editablelinkcard_inputfield}
    onChange={(e) => setDescription(e.target.value)}
    />
    <div className={style.btn_group}>
<button className={style.editcard_btn} onClick={handleCancel}>Cancel</button>
<button className={style.editcard_btn}  onClick={handleSave}>Save</button>
</div>
  </div>
  ):(
    <div className={style.editable_linkcard_preview}>
    <HiOutlinePencil onClick={()=>{setShowEditCard(!showEditCard)}} style={{color:'grey'}}/>
    <div className={style.editbtn_group}>
    <label className={style.checkbox_label}>
                <input type="checkbox" className={style.checkbox} checked={active}  onChange={handleChecked} />
                <span className={style.checkbox_span}/>
            </label>
    <GoTrashcan className={style.edit_icon} onClick={handleRemoveLink} style={{color:'grey'}}/>
    
    </div>
      </div>

  )
}
<MdDragIndicator size={40} style={{color:'grey'}}/>
</div>
// </Draggable>
  )
}

export default EditableLinkCard