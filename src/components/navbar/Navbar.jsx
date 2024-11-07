import { Link } from 'react-router-dom'
import './navbar.css'
import ButtonLenguage from '../button/buttonLenguage/ButtonLenguage'
import ButtonMenu from '../button/buttonMenu/ButtonMenu'

const Navbar = ({handleLenguage})=>{
    return(
        <aside className='navbar_container' >
            <ButtonMenu/>
            <Link to={'/profile'} >
                <div className='navbar_home' />
            </Link>
            <div>
               <ButtonLenguage handleLenguage={handleLenguage} />
            </div>
        </aside>
    )
}

export default Navbar