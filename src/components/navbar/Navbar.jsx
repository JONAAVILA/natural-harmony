import { Link } from 'react-router-dom'
import Menu from '../icons/menu/Menu.icon'
import './navbar.css'

const Navbar = ({handleLenguage})=>{
    return(
        <aside className='navbar_container' >
            <Menu/>
            <Link to={'/profile'} >
                <div className='navbar_home' />
            </Link>
            <div>
                <button onClick={()=>handleLenguage('it')} >italiano</button>
                <button onClick={()=>handleLenguage('es')} >español</button>
            </div>
        </aside>
    )
}

export default Navbar