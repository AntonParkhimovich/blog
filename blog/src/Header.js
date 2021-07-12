 export const Header = (props)=>{
     const {showModal, show, isLogin, loginIn} = props
     let data =  JSON.parse(localStorage.getItem('userInfo'))
     const clickHandler = () =>{
         if(loginIn){
            isLogin(!loginIn)
            data[2].login = false
            localStorage.setItem('userInfo', JSON.stringify(data))
         }else{
            show(!showModal)
         }
     }
    return (
        <header className="header">
            <button className="header-button" onClick= {clickHandler}>{loginIn?"logout":'Login'}</button>
        </header>
    )
}