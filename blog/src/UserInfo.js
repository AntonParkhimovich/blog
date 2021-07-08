import React, {useState} from "react"
import EditableField from "./EditableField"
 const UserInfo=(props)=>{
   let [user, guest] = props.data
   
  
    return(
        <>
            <section className="user-Info">
                <img className='user-avatar' src={user.avatarSrc}></img>
                <section className='about'>
                    <EditableField text ={user.nickname}/>
                    {/* <h2>Nickname: {user.nickname}</h2> */}
                    <h2> Fullname: {user.firstname}, {user.lastname}</h2>
                    <h2> About me:{user.aboutme}</h2>
                </section>
            </section>
        </>
    )
}
export default UserInfo