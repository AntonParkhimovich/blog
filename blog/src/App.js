import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import { Header } from './Header';
import setData from './data'
import Modal from './Modal';
import Posts from './Posts';

import UserInfo from "./UserInfo"
setData()
function App() {
  let data =  JSON.parse(localStorage.getItem('userInfo'))
  let {login} = data[2]
  const [showModal, show]= useState(false)
  const [loginIn, isLogin] = useState(login)
  return (
    <>
      <div className='wrapper'>
        <Header showModal ={showModal} show ={show}loginIn={loginIn} isLogin={isLogin}/>
        <UserInfo login={loginIn}/>
        {showModal? <Modal loginIn={loginIn} isLogin={isLogin} showModal = {showModal} show ={show}/>: null}
        <Posts loginIn ={loginIn}/>
      </div>
    </>
  )
}

export default App;
