import {  useState } from "react"
const UseHooks=user=>{
    const [theme,setTheme]=useState(false)
        return [theme,setTheme];
}
export default UseHooks;