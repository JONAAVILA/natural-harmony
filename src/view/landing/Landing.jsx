import { useState } from 'react';
import ButtonCircle from '../../components/button/buttonCircle/ButtonCircle';
import './landing.css';
import ValidateEmail from '../../components/modals/validateEmail/ValidateEmail.modal';

const Landing = ()=>{
    const [modal, setmodal] = useState(false)

    const handleModal = ()=>{
        setmodal(!modal)
    }

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
                        <span>NAT</span>
                    </div>
                </div>
                <div className='heading_box_center' >
                    <span className='ural' >URAL</span>
                    <span className='armo' >ARMO</span>
                </div>
                <div className='nia' >
                    <div>
                        <span>NIA</span>
                        <span className='landing_button_rigth' >
                            <ButtonCircle
                                handleModal={handleModal}
                            >
                                compose
                            </ButtonCircle>
                        </span>
                    </div>  
                </div>
            </h1>
        </section>
    )
}

export default Landing