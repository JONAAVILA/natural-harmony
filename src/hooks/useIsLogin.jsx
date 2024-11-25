import { useEffect, useState } from "react"

const useIsLogin = ()=>{
    const [path, setpath] = useState('/home')

    useEffect(()=>{
        const user = localStorage.getItem('user')
        if(!user) setpath('/login')
    },[])
    
    return path
}

export default useIsLogin