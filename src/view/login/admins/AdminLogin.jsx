import { useState } from 'react'
import { LoadIcon, LoginForm } from '../../../components'
import './adminLogin.css'

const AdminLogin = ()=>{
    const [loader, setloader] = useState(true)

    const handleLoader = ()=>{
        setloader(!loader)
    }

    return(
        <section>
            <div className='box_loader_admin' >
                {loader && <LoadIcon size={100}/>}
            </div>
            <h2>INGRESAR</h2>
            <LoginForm handleLoader={handleLoader} admin={true} />
        </section>
    )
}

export default AdminLogin