import { useEffect } from 'react'
import useIsLogin from '../../hooks/useIsLogin'
import './store.css'

const Store = ()=>{

    const login = useIsLogin()
    
    useEffect(()=>{
        login()
    },[])

    return(
        <section>
            <h1>STORE</h1>
        </section>
    )
}

export default Store