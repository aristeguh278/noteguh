import React,{useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Aris = () => {
    const [description,setDescription]= useState("");

    const onChangeDescripton=()=>{
        setDescription()
    }
  return (
   <>
   {description}<h1>skdsd</h1>
   <Editor
     editorState={description}
    toolbarClassName="toolbarClassName"
    wrapperClassName="wrapperClassName"
    editorClassName="editorClassName"
     onEditorStateChange={(e)=>setDescription(e.target.value)}
  />
   </>
  )
}

export default Aris