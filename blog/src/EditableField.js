import React, {useState} from "react"
const EditableField=(props)=>{
    const [show, setShow] = useState(false)
    let {text, data, setUserInfo, keyValue, user}= props
    const [value, setValue] = useState(text)
   
    const changeHandler = ({target})=>{
       setValue(target.value)
   }
    const clickHadler = ()=>{
        data[user][keyValue] = value
        setUserInfo(data)
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