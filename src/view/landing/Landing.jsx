import { Link } from 'react-router-dom';
import ButtonCircle from '../../components/button/buttonCircle/ButtonCircle';
import './landing.css';

const Landing = ()=>{
    return(
        <section className='landing_section' >
            <h1>
                <div className='nat' >
                    <div>
                        <span className='landing_button_left' >
                            <Link to={'/login'} >
                                <ButtonCircle
                                    sideArrow={'left'} 
                                    flip={'horizontal'} 
                                >
                                    yoga
                                </ButtonCircle>
                            </Link>
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
                            <Link to={'/signin'} >
                                <ButtonCircle>
                                    compose
                                </ButtonCircle>
                            </Link>
                        </span>
                    </div>
                </div>
            </h1>
        </section>
    )
}

export default Landing