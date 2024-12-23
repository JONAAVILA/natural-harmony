import { useEffect } from 'react'
import useIsLogin from '../../hooks/useIsLogin'
import './admin.css'

const Admin = ()=>{
 
    const login = useIsLogin('admin')
    
    useEffect(()=>{
        login()
    },[])

    return(
        <section>
            <h1>DASHBOARD</h1>  
        </section> 
    )
}

export default Admin