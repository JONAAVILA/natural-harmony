import { useTranslation } from 'react-i18next';
import { ButtonCircle, SocialNetworks } from '../../components';
import './landing.css';

const Landing = ()=>{
    const { t } = useTranslation()
    const tittle = t('naturalArmonia').split(' ')

    return(
        <section className='landing_section' >
            <h1>
                <div className='nat' >
                    <div>
                        <span className='landing_button_left' >
                            <ButtonCircle
                                sideArrow={'left'} 
                                flip={'horizontal'} 
                                path={'/store'}
                            >
                                YOGA
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
                                path={'/store'}
                            >
                                COMPOST
                            </ButtonCircle>
                        </span>
                    </div>  
                </div>
            </h1>
            <div className='box_social_network' >
                <SocialNetworks/>
            </div>
        </section>
    )
}

export default Landing