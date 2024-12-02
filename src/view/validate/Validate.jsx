import { useTranslation } from 'react-i18next'
import CheckEmail from '../../components/forms/validate/CheckEmail.form'
import './validate.css'

const Validate = ()=>{
    const { t } = useTranslation()

    return(
        <section className='validate_section' >
            <div>
                <h2>{t('ingresaTuEmail')}</h2>
                <h3>{t('vamosAValidarTuEmail')}</h3>
            </div>
            <CheckEmail/>
        </section>
    )
}

export default Validate