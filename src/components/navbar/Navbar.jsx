import { Link } from 'react-router-dom'
import './navbar.css'
import ButtonLenguage from '../button/buttonLenguage/ButtonLenguage'
import ButtonMenu from '../button/buttonMenu/ButtonMenu'
import { useTranslation } from 'react-i18next'

const Navbar = ({handleLenguage})=>{
    const { t } = useTranslation()

    return(
        <aside className='navbar_container' >
            <ButtonMenu/>
            <div className='box_profile' >
                <a href="/contact">{t('contacto')}</a>
                <Link to={'/profile'} >
                    <div className='navbar_home' />
                </Link>
                <a href="/about">ABOUT</a>
            </div>
            <div>
               <ButtonLenguage handleLenguage={handleLenguage} />
            </div>
        </aside>
    )
}

export default Navbar