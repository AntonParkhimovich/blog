import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import { Header } from './Header';
import setData from './data'

import UserInfo from "./UserInfo"
setData()
function App() {
  
  return (
    <>
      <div className='wrapper'>
        <Header/>
        <UserInfo/>
      </div>
    </>
  )
}

export default App;
