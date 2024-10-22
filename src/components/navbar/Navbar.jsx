import Menu from '../icons/menu/Menu.icon'
import './navbar.css'

const Navbar = ()=>{
    return(
        <aside className='navbar_container' >
            <Menu/>
            <span className='navbar_home' />
        </aside>
    )
}

export default Navbar