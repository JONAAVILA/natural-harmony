import { useState } from 'react'
import './adminLogin.css'
import { Link } from 'react-router-dom'
import LoginAdmin from '../../../components/forms/loginAdmin/LoginAdmin'

const AdminLogin = ()=>{
    const [loader, setloader] = useState(false)

    const handleLoader = ()=>{
        setloader(!loader)
    }

    return(
        <section className="section_admin_login" >
            <h2>INGRESO ADMIN</h2>
            <LoginAdmin/>
            <div className='box_link_signin' >
                <Link to={'/admin/signin'} >
                    <h3>REGISTRARSE</h3>
                </Link>
            </div>
        </section>
    )
}

export default AdminLogin