import React, {useState}from 'react'

const PostsHeader = (props)=>{
    let {postsData, loginIn, renderPosts, changeHandler, value, clickHandler} = props
    return(
        <>
        <div className={'posts-header'}>
            <textarea className={'textarea'} placeholder={'Say something'} value={value} onChange={changeHandler}/>
            <button className={'button-post'} onClick={clickHandler}>{'Post'}</button>
        </div>
        </>
    )
}
export default PostsHeader