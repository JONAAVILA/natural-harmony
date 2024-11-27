import { Link } from 'react-router-dom'
import './navbar.css'
import ButtonLenguage from '../button/buttonLenguage/ButtonLenguage'
import ButtonMenu from '../button/buttonMenu/ButtonMenu'
import { useTranslation } from 'react-i18next'
import imageHome from '../../assets/home.png'

const Navbar = ({handleLenguage})=>{
    const { t } = useTranslation()

    return(
        <aside className='navbar_container' >
            <ButtonMenu/>
            <div className='box_profile' >
                <a href="/contact">{t('contacto')}</a>
                    <div className='navbar_profile'>
                        <Link to={'/profile'} >
                            <img src={imageHome} alt="profile image" />
                        </Link>
                        <p className='logout_profile' >LOGOUT</p>
                    </div>
                <a href="/about">ABOUT</a>
            </div>
            <div>
               <ButtonLenguage handleLenguage={handleLenguage} />
            </div>
        </aside>
    )
}

export default Navbar