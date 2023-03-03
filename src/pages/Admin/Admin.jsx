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
import EditableLinkCard from '../../components/EditableLinkCard/EditableLinkCard'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useAdmin } from '../../contexts/adminContext';
import PagePreview from '../../components/PagePreview/PagePreview'


const Admin = () => {
  const { state,dispatch} = useAdmin();
  const {showDesign,pagePreview } = useView();
  const {links,username} = state;
  return (
    pagePreview?(<PagePreview/>):
    (
      <div className={style.main_container}>
        <div className={style.left_container}>
<LinkShare username={username}/>
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
{links?.map((link, index) => {

return (
  <EditableLinkCard
  key={link.title || index}
  id={index}
  Link={link}
  />

);
})}
{/* <DragDropContext
        onDragEnd={(param) => {
          const srcI = param.source.index;
          const desI = param.destination?.index;
          const newLinks = [...links];
          const draggeditem = newLinks.splice(srcI, 1);
          newLinks.splice(desI, 0, ...draggeditem);
          dispatch({ type: "field", field: "links", value: newLinks });
        }}
      >
        <Droppable droppableId="dropable-1">
          {(provided, _) => (
            <div
              key="dropable-1"
              className="my-2 flex w-full flex-col space-y-4"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {links?.map((link, index) => {

                return (
                  <EditableLinkCard
                  key={link.title || index}
                  id={index}
                  Link={link}
                  />
                  // <LinkCardEditable
                  //   key={link.title || index}
                  //   id={index}
                  //   Link={link}
                  // />
                );
              })}


              
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext> */}


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

    
  )
}

export default Admin