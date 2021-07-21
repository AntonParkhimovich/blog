import React, {useState, useContext}from 'react'
import ContextData from './ContextData'
import ThemeContext from './ThemeContext'
import { useHistory } from 'react-router'
const Modal = (props)=>{
    const {loginIn, isLogin, showModal, show} = props
    const[data, setData]= useContext(ContextData)
    const [userValue, setUserValue]= useState('')
    const [passwordValue, setPasswordValue]= useState('')
    const[context] = useContext(ThemeContext)
    let {username, password} = data[2]
    let history = useHistory()

    const userHandler=(event)=>{
        const {value} = event.target
        setUserValue(value)
    }
    const passwordHandler=(event)=>{
        const {value} = event.target
        setPasswordValue(value)
    }
    const clickHandler=()=>{
        if(username === userValue && password === passwordValue){
            isLogin(!loginIn)
            data[2].login = true
            setData(data)
            history.goBack()
        }
    }
    const closeModal=()=>{
        history.goBack()
    }
    return(
        <>
       <div className ={'modal-wrapper'}>
            <div className={`modal ${context? 'black': 'white'}`}>
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