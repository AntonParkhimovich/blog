import React, {useState}from 'react'
const Modal = (props)=>{
    const {loginIn, isLogin, showModal, show} = props
    const [userValue, setUserValue]= useState('')
    const [passwordValue, setPasswordValue]= useState('')
    let data =  JSON.parse(localStorage.getItem('userInfo'))
    let {username, password} = data[2]

    const userHandler=(event)=>{
        const {value} = event.target
        setUserValue(value)
    }
    const passwordHandler=(event)=>{
        const {value} = event.target
        setPasswordValue(value)
    }
    const clickHandler=()=>{
        if(username === userValue|| password === passwordValue){
            isLogin(!loginIn)
            data[2].login = true
            localStorage.setItem('userInfo', JSON.stringify(data))
            show(!showModal)
        }
    }
    const closeModal=()=>{
        show(!showModal)
    }

    return(
        <>
       <div className ={'modal-wrapper'}>
            <div className={'modal'}>
                <div className={'modal-head'}>
                    <button className={'button-close'} onClick={closeModal}>{'X'}</button>
                 </div>
                <div className={'modal-body'}>
                    <h2 className={'modal-title'}>{'Please login'}</h2> 
                    <input type ={'text'} placeholder ={'login'} onChange={userHandler}/>
                    <input type={'password'} placeholder ={'Password'} onChange={passwordHandler}/>
                </div>
                <div className={'modal-footer'}>
                    <button className={'buttom-accept'} onClick={clickHandler}>{"Login"}</button>
                </div>
            </div>   
        </div> 
        </>
    )
    }
export default Modal