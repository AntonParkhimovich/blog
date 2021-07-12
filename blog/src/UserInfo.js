import React, {useState} from "react"
import User from "./User"
 const UserInfo=(props)=>{
   let {login} = props
    return(
       <User login={login}/>
    )
}
export default UserInfo