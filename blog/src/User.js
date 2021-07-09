import{useState} from 'react'
import EditableField from "./EditableField"
const User = (props)=>{
    let data =  JSON.parse(localStorage.getItem('userInfo'))
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
                <EditableField text ={userInfo.nickname} keyValue = {'nickname'} data={data} setUserInfo={setUserInfo} user={user}/>
                <EditableField text ={userInfo.firstname} keyValue = {'firstname'} data={data} setUserInfo={setUserInfo}user={user}/>
                <EditableField text ={userInfo.lastname} keyValue = {'lastname'} data={data} setUserInfo={setUserInfo}user={user}/>
                <EditableField text ={userInfo.aboutme}keyValue = {'aboutme'} data={data} setUserInfo={setUserInfo}user={user}/>
            </section>
        </section>
    </>:
    <>
    <section className="user-Info">
    <img className='user-avatar'src={userInfo.avatarSrc} alt={'user-avatar'}></img>
    <section className='about'>
        <h2>{userInfo.name}</h2> 
    </section>
</section>
    </>
    )
}
export default User