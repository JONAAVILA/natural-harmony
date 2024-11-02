import { useState } from 'react';
import ButtonCircle from '../../components/button/buttonCircle/ButtonCircle';
import './landing.css';
import ValidateEmail from '../../components/modals/validateEmail/ValidateEmail.modal';
import { useTranslation } from 'react-i18next';

const Landing = ()=>{
    const [modal, setmodal] = useState(false)
    const { t } = useTranslation()

    const handleModal = ()=>{
        setmodal(!modal)
    }

    const tittle = t('naturalArmonia').split(' ')

    return(
        <section className='landing_section' >
            {modal && <ValidateEmail handleModal={handleModal} />}
            <h1>
                <div className='nat' >
                    <div>
                        <span className='landing_button_left' >
                            <ButtonCircle
                                sideArrow={'left'} 
                                flip={'horizontal'} 
                                path={'/login'}
                            >
                                yoga
                            </ButtonCircle>
                        </span>
                        <span>{tittle[0].split('').slice(0,3)}</span>
                    </div>
                </div>
                <div className='heading_box_center' >
                    <span className={`ural ${t('clasesDeYoga')}`} >
                        {tittle[0].split('').slice(3,7)}
                    </span>
                    <span className={`armo ${t('clasesDeCompose')}`} >
                        {tittle[1].split('').slice(0,4)}
                    </span>
                </div>
                <div className='nia' >
                    <div>
                        <span>
                            {tittle[1].split('').slice(4,8)}
                        </span>
                        <span className='landing_button_rigth' >
                            <ButtonCircle
                                handleModal={handleModal}
                            >
                                compost
                            </ButtonCircle>
                        </span>
                    </div>  
                </div>
            </h1>
        </section>
    )
}

export default Landing