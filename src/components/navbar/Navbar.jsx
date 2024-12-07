import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ButtonLenguage, ButtonMenu } from '../../components';
import imageHome from '../../assets/home.png'
import { useLogout } from '../../hooks'
import './navbar.css'

const Navbar = ({handleLenguage})=>{
    const logout = useLogout()
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
                        <button onClick={logout} className='logout_profile' >SALIR</button>
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