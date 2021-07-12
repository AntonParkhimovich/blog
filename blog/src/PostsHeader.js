import React, {useState}from 'react'
const PostsHeader = (props)=>{
    return(
        <>
        <div className={'posts-header'}>
            <textarea className={'textarea'} placeholder={'Say something'}/>
            <button className={'button-post'}>{'Post'}</button>
        </div>
        </>
    )
}
export default PostsHeader