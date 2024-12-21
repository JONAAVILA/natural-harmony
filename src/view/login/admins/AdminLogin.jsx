import { useState } from 'react'
import { LoadIcon, LoginForm } from '../../../components'
import './adminLogin.css'

const AdminLogin = ()=>{
    const [loader, setloader] = useState(false)

    const handleLoader = ()=>{
        setloader(!loader)
    }

    return(
        <section className="section_admin_login" >
            <div className='box_loader_admin' >
                {loader && <LoadIcon size={100}/>}
            </div>
            <h2>INGRESO ADMIN</h2>
            <LoginForm handleLoader={handleLoader} admin={true} />
        </section>
    )
}

export default AdminLogin