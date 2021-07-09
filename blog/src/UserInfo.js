import React, {useState} from "react"
import User from "./User"
 const UserInfo=(props)=>{
   let login = true
    return(
       <User login={login}/>
    )
}
export default UserInfo