import React from 'react'
import AddSocials from '../../components/AddSocials/AddSocials'
import BioEdit from '../../components/BioEdit/BioEdit'
import LinkAdd from '../../components/LinkAdd/LInkAdd'

import LinkShare from '../../components/LinkShare/LinkShare'
import MobilePreview from '../../components/MobilePreview/MobilePreview'
import ViewControls from '../../components/ViewControls/ViewControls'
import style from './styles.module.css'

import BackgroundEditor from '../../components/BackgroundEditor/BackgroundEditor';
import FontColorEditor from '../../components/FontColorEditor/FontColorEditor';
import ButtonEditor from '../../components/ButtonEditor/ButtonEditor'
import ButtonFontEditor from '../../components/ButtonFontEditor/ButtonFontEditor'
import { useView } from '../../contexts/viewContext'
import { GoTrashcan } from "react-icons/go";
import { MdDragIndicator } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi";
import EditableLinkCard from '../../components/EditableLinkCard/EditableLinkCard'


const Admin = () => {

  const {showDesign, setShowDesign } = useView();
  return (
    <div className={style.main_container}>
        <div className={style.left_container}>
<LinkShare/>
{
showDesign?
(
  <>
  <BackgroundEditor/>
<FontColorEditor/>
<ButtonEditor/>
<ButtonFontEditor/>
  </>

):(
  <>
<BioEdit/>
<LinkAdd/>

<EditableLinkCard/>

<AddSocials/>
  </>
)
}
        </div>
        <div className={style.right_container}>
          <ViewControls/>
          <MobilePreview/>

<div>
</div>
        </div>
    </div>
  )
}

export default Admin