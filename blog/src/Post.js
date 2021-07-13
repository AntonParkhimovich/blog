import React, {useState}from 'react'

const Post = (props)=>{
    let {data,text, date} = props
   return(
       <>
            <div className={'post'}>
                <div className={'post-user__info'}>
                    <img src={data.avatarSrc} alt={'user-avatar'} className={'post-avatar'}/>
                    <h2 className={'user-nickname'}> {data.nickname}</h2>
                </div>
                <div className={"post-user__text"}>{text}</div>
                <div className={'date-post'}>{date}</div>
            </div>
       </>
   )
}
export default Post