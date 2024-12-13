import { useState } from 'react'
import { LoginForm } from '../../../components'

const AdminLogin = ()=>{
    const [loader, setloader] = useState(false)

    const handleLoader = ()=>{
        setloader(!loader)
    }

    return(
        <section>
            <LoginForm handleLoader={handleLoader} admin={true} />
        </section>
    )
}

export default AdminLogin