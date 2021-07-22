import React, {useContext, useState}from 'react'
import PostsHeader from './PostsHeader'
import {Post, PostPreview} from './Post'
import ContextData from './ContextData'
import PostConstructor from './postsConstructor'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";


const Posts = (props)=>{
    const {loginIn} = props
    let [data, setData] = useContext(ContextData)
    let userInfo =  loginIn? data[0]: data[1]
    const [value, setValue] = useState('')
    let { path, url } = useRouteMatch();
    
    const changeHandler=(event)=>{
        let {value} = event.target
        setValue(value)
    }
       const clickHandler=()=>{
        if(value){
            let post = new PostConstructor(value)
            userInfo.posts.push(post)
            localStorage.setItem('userInfo', JSON.stringify(data))
            setValue("")
        }
    }
   
    return(
        <>
         <Router>
        <PostsHeader
         changeHandler={changeHandler}
         value={value}
         clickHandler ={clickHandler}
         />
        {userInfo.posts.map((element)=>{
            return(
            <>
            <PostPreview data={userInfo} text={element.text} date={element.date} id={element.id} url={url}/>
            <Switch>
            <Route exact path={`${path}/${element.id}`}>
            <Post data={userInfo} text={element.text} date={element.date} id={element.id} url={url}/>
            </Route>
            </Switch>
            </>
            )
        })}
        </Router>
         </>
    )
}
export default Posts