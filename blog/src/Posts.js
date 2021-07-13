import React, {useState}from 'react'
import PostsHeader from './PostsHeader'
import Post from './Post'

const Posts = (props)=>{
    const {loginIn} = props
    let postsData = JSON.parse(localStorage.getItem('userInfo'))
    let userInfo =  loginIn? postsData[0]: postsData[1]
    const [postState, renderPost] = useState([])
    return(
        <>
        <PostsHeader postsData ={postsData} loginIn={loginIn}  renderPost={renderPost}/>
        {userInfo.posts.map((element)=>{
            return(
            <Post data={userInfo} text={element.text} date={element.date}/>
            )
        })}
        </>
    )
}
export default Posts