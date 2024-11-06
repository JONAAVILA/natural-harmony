import { useTranslation } from 'react-i18next';
import CreateUser from '../../components/forms/signin/signin.form';
import './signin.css';

const Signin = ()=>{
    const { t } = useTranslation()
    const tittle = t('registrarse')

    return(
        <section className='container_signin' >
            <div className='box_heading_signin' >
                <h1>
                    <span>{tittle.slice(0,5)}</span>
                    <br/>
                    <span className='trar' >{tittle.slice(5,9)}</span>
                    <br/>
                    <span className='se' >{tittle.slice(9,11)}</span>
                </h1>
                <p>{t('alCrearElUsuarioAceptasLosTerminosYCondicionesDeNaturalArmonia')}</p>
            </div>
            <CreateUser/>
        </section>
    )
}

export default Signin