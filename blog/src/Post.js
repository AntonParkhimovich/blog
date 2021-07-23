import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    useHistory,
  } from "react-router-dom";
 export const PostPreview = (props)=>{
    let {data,text, date, id ,url} = props
   return(
       <>
            
            <div className={'postPreview'}>
                <div className={'postPreview-user__info'}>
                    <img src={data.avatarSrc} alt={'user-avatar'} className={'postPreview-avatar'}/>
                    <h2 className={'user-nickname'}> {data.nickname}</h2>
                </div>
                <div className={"postPreview-user__text"}>{text.slice(0,5)}
                <Link to ={`${url}${id}`}>See this post</Link>
                </div>
            </div>
            
       </>
   )
}
export const Post = (props)=>{
    let {data,text, date} = props
    let history = useHistory()
    const clickHandler=(event)=>{
        console.log(event.target);
    }
    return(
        <>
            <div className={'post-wrapper'} >
                <div className={'post'}>
                    <button className ={'button-close'} onClick={clickHandler}>X</button>
                    <div className={'post-user__info'}>
                        <img src={data.avatarSrc} alt={'user-avatar'} className={'post-avatar'}/>
                        <h2 className={'user-nickname'}> {data.nickname}</h2>
                    </div>
                 <div className={"post-user__text"}>{text}</div>
                 <div className={'date-post'}>{date}</div>
                </div>
             </div>
        </>
    )
}



