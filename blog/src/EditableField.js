import React, {useContext, useState} from "react"
import ContextData from "./ContextData"
const EditableField=(props)=>{
    const[data]= useContext(ContextData)
    const [show, setShow] = useState(false)
    let {text, setUserInfo, keyValue, user}= props
    const [value, setValue] = useState(text)
    
    const changeHandler = ({target})=>{
       setValue(target.value)
   }
    const clickHadler = ()=>{
        data[user][keyValue] = value
        setUserInfo(value)
        localStorage.setItem('userInfo', JSON.stringify(data))
        setShow(!show)
    }
    const dobleClickHandler = ()=>{
        setShow(!show)
    }
    return(
        show? <><input className ="edit-input" value={value} 
        onChange = {changeHandler}/><button className="button-submit"
         onClick={clickHadler}>Save</button></>:
        <h2 onDoubleClick ={dobleClickHandler}>{text}</h2>
    )
    
}
export default EditableField