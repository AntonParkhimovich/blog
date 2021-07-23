import { useContext } from "react"
import ContextData from "./ContextData"
import ThemeContext from "./ThemeContext"
const ThemeButton = ()=>{
const [context,setContext] = useContext(ThemeContext)
const[dataLocalstorage, setData] = useContext(ContextData)

const changeHandler=(event)=>{
    setContext(!context)
    dataLocalstorage[2].context = !context
    setData(dataLocalstorage)
}
    return(
        <>
    <label className={"switch"}>
        <input type="checkbox" checked={context} onChange={changeHandler}/>
        <span className={"slider round"}></span>
    </label>
        </>
    )
}
export default ThemeButton