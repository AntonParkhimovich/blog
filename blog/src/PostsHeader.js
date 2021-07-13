import React, {useState}from 'react'
import PostConstructor from './postsConstructor'
const PostsHeader = (props)=>{
    let {postsData, loginIn, renderPost} = props
    const [value, setValue] = useState('')
    const changeHandler=(event)=>{
        let {value} = event.target
        setValue(value)
    }
    const clickHandler=()=>{
        if(value){
            let post = new PostConstructor(value)
            let data = loginIn?postsData[0].posts:postsData[1].posts
            data.push(post)
            renderPost(postsData)
            localStorage.setItem('userInfo', JSON.stringify(postsData))
            
            setValue("")
        }
    }
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