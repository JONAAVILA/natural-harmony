import { Link } from 'react-router-dom'
import Menu from '../icons/menu/Menu.icon'
import './navbar.css'

const Navbar = ()=>{
    return(
        <aside className='navbar_container' >
            <Menu/>
            <Link to={'/profile'} >
                <div className='navbar_home' />
            </Link>
        </aside>
    )
}

export default Navbar