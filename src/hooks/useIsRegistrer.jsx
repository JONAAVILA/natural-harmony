import { useEffect, useState } from "react"

const useIsRegistrer = ()=>{
    const [path, setpath] = useState('/home')

    useEffect(()=>{
        const user = localStorage.getItem('user')
        if(!user) setpath('/signin')
    })    

    return path
}

export default useIsRegistrer