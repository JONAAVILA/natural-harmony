import ButtonCircle from '../../components/button/buttonCircle/ButtonCircle';
import LoginForm from '../../components/forms/login/Login.form';
import './login.css';

const Login = ()=>{
    return(
        <section className='section_login' >
            <h1 className='heading_login' >
                <span>INGRE</span>
                <span className='sar' >SAR</span>
            </h1>
            <div>
                <h2>QUE BUENO VERTE</h2>
                <h3>VAMOS A PEDIRTE UNOS DATOS</h3>
                <LoginForm/>
            </div>
        </section>
    )
}

export default Login