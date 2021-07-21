import './App.css';
import React, {useEffect, useState} from 'react';
import { Header } from './Header';
import setData from './data'
import Modal from './Modal';
import Posts from './Posts';
import UserInfo from "./UserInfo"
import ThemeContext from './ThemeContext'
import ContextData from './ContextData'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
setData()
function App() {
  let dataLocalstorage =  JSON.parse(localStorage.getItem('userInfo'))
  let [data, setData] = useState([])
  let {login} = dataLocalstorage[2]
  const [loginIn, isLogin] = useState(login)
  const [context, setContext] = useState(dataLocalstorage[2].context)

  useEffect(()=>{
    if(data.length !== 0){
      localStorage.setItem('userInfo', JSON.stringify(data))      
    }
  },[data])
  return (
    <>
            <ContextData.Provider value={[dataLocalstorage, setData]}>
            <ThemeContext.Provider value={[context, setContext]}>
            <Router>
            <Switch>
            <Route exact path="/">
              <div className={`wrapper ${context? 'black': 'white'}`}>
              <Header loginIn={loginIn} isLogin={isLogin} to={'/auth'}/>
              <UserInfo login={loginIn} />
              </div>
             </Route>
             <Route exact path = '/posts'>
             <div className={`wrapper ${context? 'black': 'white'}`}>
              <Header loginIn={loginIn} isLogin={isLogin} to={'/auth'}/>
              <UserInfo login={loginIn} />
              <Posts loginIn ={loginIn}/>
              </div>
             </Route>
             <Route exact path = '/auth'>
             <Modal loginIn={loginIn} isLogin={isLogin}/>
             </Route>
            </Switch>
            </Router>
            </ThemeContext.Provider>
            </ContextData.Provider>
          
    </>
  )
}

              
export default App;
