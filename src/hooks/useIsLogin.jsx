import { useState } from "react"

const useIsLogin = ()=>{
    const [path, setpath] = useState('/home')
    const user = localStorage.getItem('user')
    
    if(!user) setpath('/login')
    return path
}

export default useIsLogin