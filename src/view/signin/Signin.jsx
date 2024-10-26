import CreateUser from '../../components/forms/signin/signin.form';
import './signin.css';

const Signin = ()=>{
    return(
        <section className='container_signin' >
            <div className='box_heading_signin' >
                <h1>
                    <span>REGIS</span>
                    <br/>
                    <span className='trar' >TRAR</span>
                    <br/>
                    <span className='se' >SE</span>
                </h1>
                <p>al crear el usuario aceptas los terminos y condiciones de Natural Armonia</p>
            </div>
            <CreateUser/>
        </section>
    )
}

export default Signin