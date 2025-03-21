import { useState } from 'react'
import './adminLogin.css'
import LoginAdmin from '../../../components/forms/loginAdmin/LoginAdmin'
import ButtonRegistrer from '../../../components/button/buttonRegistrer/ButtonRegistrer'

const AdminLogin = ()=>{
    const [loader, setloader] = useState(false)

    const handleLoader = ()=>{
        setloader(!loader)
    }

    return(
        <section className="section_admin_login" >
            <h2>INGRESO ADMIN</h2>
            <LoginAdmin/>
            <ButtonRegistrer path={'/admin/signin'} />
        </section>
    )
}

export default AdminLogin