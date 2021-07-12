import React, {useState}from 'react'
import PostsHeader from './PostsHeader'
const Posts = (props)=>{
    const {loginIn} = props
    let postsData = loginIn? JSON.parse(localStorage.getItem('userInfo'))[0].posts:JSON.parse(localStorage.getItem('userInfo'))[1].posts
    return(
        <PostsHeader/>
    )
}
export default Posts