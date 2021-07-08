import React, {useState} from "react"
const EditableField=(props)=>{
    const [show, setShow] = useState(false)
    const {text}= props
    const dobleClickHandler = ()=>{
        setShow(!show)
    }
    return(
        show? <><input className ="edit-input"/><button className="button-submit">Save</button></>:
        <h2 onDoubleClick ={dobleClickHandler}>{text}</h2>
    )
    
}
export default EditableField