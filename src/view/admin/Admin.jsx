import './admin.css'
import { LoginForm } from '../../components';
import { useState } from 'react';

const Admin = ()=>{

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

export default Admin