import React, {useState , useContext} from "react"
import ContextData from "./ContextData"
import User from "./User"
 const UserInfo=(props)=>{
   let {login} = props
   const[data, setData] = useContext(ContextData)
    return(
       <User login={login} data={data}/>
    )
}
export default UserInfo