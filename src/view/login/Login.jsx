import { useState } from 'react';
import LoginForm from '../../components/forms/login/Login.form';
import LoadIcon from '../../components/icons/loader/LoadIcon';
import './login.css';

const Login = ()=>{
    const [loader, setloader] = useState(false)

    const handleLoader = ()=>{
        setloader(!loader)
    }

    return(
        <section className='section_login' >
            <div>
                <h1 className='heading_login' >
                    <span>INGRE</span>
                    <span className='sar' >
                        SAR
                        {loader && <span className='loader_login' >{<LoadIcon size={200} />}</span>}
                    </span>
                </h1>
                <div className='subheading_login' >
                    <h2>QUE BUENO VERTE</h2>
                    <h3>VAMOS A PEDIRTE UNOS DATOS</h3>
                </div>
                <div className='box_input_login' >
                    <LoginForm handleLoader={handleLoader} />
                </div>
            </div>
        </section>
    )
}

export default Login