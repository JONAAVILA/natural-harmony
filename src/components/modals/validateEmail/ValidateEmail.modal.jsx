import { useTranslation } from 'react-i18next'
import CheckEmail from '../../forms/validate/CheckEmail.form'
import './validateEmail.modal.css'

const ValidateEmail = ({handleModal})=>{
    const { t } = useTranslation()

    return(
        <>
            <div className='container_email_modal' onClick={handleModal} >
            </div>
            <div className='box_email_modal' >
                <h2>{t('ingresaTuEmail')}</h2>
                <h3>VAMOS A VALIDAR TU EMAIL</h3>
                <CheckEmail/>
            </div>
        </>
    )
}

export default ValidateEmail