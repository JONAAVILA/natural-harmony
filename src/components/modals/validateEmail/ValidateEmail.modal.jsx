import { useTranslation } from 'react-i18next'
import CheckEmail from '../../forms/validate/CheckEmail.form'
import './validateEmail.modal.css'

const ValidateEmail = ()=>{
    const { t } = useTranslation()

    return(
        <>
            <div className='container_email_modal'>
            </div>
            <div className='box_email_modal' >
                <h2>{t('ingresaTuEmail')}</h2>
                <h3>{t('vamosAValidarTuEmail')}</h3>
                <CheckEmail/>
            </div>
        </>
    )
}

export default ValidateEmail