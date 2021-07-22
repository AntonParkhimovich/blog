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
            <div className={`wrapper ${context? 'black': 'white'}`}>
              <Header loginIn={loginIn} isLogin={isLogin} to={'/auth'}/>
            </div>
            <Switch>
            <Route exact path="/">
              <UserInfo login={loginIn} />
             </Route>
             <Route path = '/posts'>
              <UserInfo login={loginIn} />
              <Posts loginIn ={loginIn}/>
             </Route>
             <Route  path = '/auth'>
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
