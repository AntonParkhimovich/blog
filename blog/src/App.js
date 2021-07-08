import logo from './logo.svg';
import './App.css';
import react from "react"
import { Header } from './Header';
import data from './data'
import UserInfo from "./UserInfo"
function App() {
  return (
    <>
      <div className='wrapper'>
        <Header/>
        <UserInfo data={data}/>
      </div>
    </>
  )
}

export default App;
