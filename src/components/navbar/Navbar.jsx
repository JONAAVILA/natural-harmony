import { Link } from 'react-router-dom'
import Menu from '../icons/menu/Menu.icon'
import './navbar.css'
import ButtonLenguage from '../button/buttonLenguage/ButtonLenguage'

const Navbar = ({handleLenguage})=>{
    return(
        <aside className='navbar_container' >
            <Menu/>
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