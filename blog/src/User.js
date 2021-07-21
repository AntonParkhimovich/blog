import{useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import ContextData from './ContextData'
import EditableField from "./EditableField"
const User = (props)=>{
    const[data] = useContext(ContextData)
    let {login}=props
    let [userState, setUserInfo] = useState([]) 
    let user = login?0:1
    let userInfo = data[user]

    return(
        login?
        <>
        <section className="user-Info">
            <img className='user-avatar'src={userInfo.avatarSrc} alt={'user-avatar'}></img>
            <section className='about'>
                <EditableField text ={userInfo.nickname} keyValue = {'nickname'}  setUserInfo={setUserInfo} user={user}  />
                <EditableField text ={userInfo.firstname} keyValue = {'firstname'} setUserInfo={setUserInfo}user={user} />
                <EditableField text ={userInfo.lastname} keyValue = {'lastname'} setUserInfo={setUserInfo}user={user} />
                <EditableField text ={userInfo.aboutme}keyValue = {'aboutme'} setUserInfo={setUserInfo}user={user} />
                <Link to ="/posts">see my post</Link>
            </section>
        </section>
    </>:
    <>
    <section className="user-Info">
    <img className='user-avatar'src={userInfo.avatarSrc} alt={'user-avatar'}></img>
    <section className='about'>
        <h2>{userInfo.nickname}</h2> 
        <Link to ="/posts">see my post</Link>
    </section>
</section>
    </>
    )
}
export default User