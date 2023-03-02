import React from 'react'
import style from './styles.module.css'
import { useAdmin } from '../../contexts/adminContext';
const LinkAdd = () => {
  const { state,dispatch} = useAdmin();
  const {links} = state
  const handleNewLink = () => {
    dispatch({
      type: "field",
      field: "links",
      value: [...links, { title: "", link: "", description: "", active: true }],
    });
  };
  return (
<div className={style.link_container}>
<button className={style.addlink_btn} onClick={handleNewLink}>Add Links</button>
<button className={style.explore_btn}>Explore Links</button>
</div>
  )
}

export default LinkAdd