import { useContext } from "react" 
import ThemeButton from "./ThemeButton"
import ContextData from "./ContextData"
import { Link } from "react-router-dom"
 export const Header = (props)=>{
     const {isLogin, loginIn, to} = props
     const [data, setData] = useContext(ContextData)
     const clickHandler = () =>{
            isLogin(!loginIn)
            data[2].login = false
            setData(data)
     }
    return (
        <header className="header">
            <ThemeButton/>
            {loginIn ?
             <button className="header-button" onClick={clickHandler}>Logout</button>
            :<Link to={to} className="header-button"> login</Link>}
        </header>
    )
}