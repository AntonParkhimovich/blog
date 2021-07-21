import React from 'react'
import { useParams } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
const Post = (props)=>{
    let {data,text, date, id ,url} = props
    let { topicId } = useParams();
    console.log(topicId);
   return(
       <>
            <Router>
            <div className={'post'}>
                <div className={'post-user__info'}>
                    <img src={data.avatarSrc} alt={'user-avatar'} className={'post-avatar'}/>
                    <h2 className={'user-nickname'}> {data.nickname}</h2>
                </div>
                <div className={"post-user__text"}>{text.slice(0,5)}
                    <Link to ={`${url}/${id}`}>See this post</Link>
                </div>
                {/* <div className={'date-post'}>{date}</div> */}
            </div>
            </Router>
       </>
   )
}
export default Post