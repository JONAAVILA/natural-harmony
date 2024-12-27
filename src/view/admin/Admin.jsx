import { useEffect } from 'react'
import useIsLogin from '../../hooks/useIsLogin'
import './admin.css'
import { CreateProduct } from '../../components'

const Admin = ()=>{
 
    const login = useIsLogin('admin')
    
    useEffect(()=>{
        login()
    },[])

    return(
        <section>
            <h1>DASHBOARD</h1>
            <CreateProduct/>
        </section> 
    )
}

export default Admin