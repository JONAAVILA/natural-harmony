import Button from '../../components/button/Button';
import Arrow from '../../components/icons/Arrow.icon';
import './landing.css';

const Landing = ()=>{
    return(
        <section className='landing_section' >
            <h1>
                <div className='nat' >
                    <div>
                        <span className='landing_button_left' >
                            <Button/>
                            <Arrow side={'left'} />
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
                            <Arrow/>
                            <Button/>
                        </span>
                    </div>
                </div>
            </h1>
        </section>
    )
}

export default Landing