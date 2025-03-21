import { useState } from 'react';
import { LoginForm, LoadIcon } from '../../../components';
import { useTranslation } from 'react-i18next';
import ButtonRegistrer from '../../../components/button/buttonRegistrer/ButtonRegistrer';
import './login.css';

const Login = ()=>{
    const [loader, setloader] = useState(false)
    const { t } = useTranslation()
    const tittle = t('ingresar')

    const handleLoader = ()=>{
        setloader(!loader)
    }

    return(
        <section className='section_login' >
            <div>
                <h1 className='heading_login' >
                    <span>{tittle.slice(0,5)}</span>
                    <span className='sar' >
                        {tittle.slice(5,8)}
                        {loader && <span className='loader_login' >{<LoadIcon size={200} />}</span>}
                    </span>
                </h1>
                <div className='subheading_login' >
                    <h2>{t('queBuenoVerte')}</h2>
                    <h3>{t('vamosAPedirteUnosDatos')}</h3>
                </div>
                <div className='box_input_login' >
                    <LoginForm handleLoader={handleLoader} admin={false}/>
                </div>
                <ButtonRegistrer path={'/signin'} />
            </div>
        </section>
    )
}

export default Login