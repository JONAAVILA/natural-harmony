import Instagram from '../../icons/instagram/Instagram'
import Whatsapp from '../../icons/whatsapp/Whatsapp'
import './socialNetworks.css'

const SocialNetworks = ()=>{
    return( 
        <div className='container_networks' >
            <div className='box_button_networks' >
                <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                >
                    <Whatsapp/>
                </a>
                <a
                    href="https://www.instagram.com/naturalarmonia.lf.it"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Instagram/>
                </a>
            </div>
        </div>
    )
}

export default SocialNetworks