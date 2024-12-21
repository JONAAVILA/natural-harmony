import { useState } from 'react'
import useLogout from '../../../hooks/useLogout'
import { Link } from 'react-router-dom'
import './buttonMenu.css'

const ButtonMenu = ()=>{
    const logout = useLogout()
    const [ toggle, setToggle ] = useState(false)

    const handleToggle = ()=>{
        setToggle(!toggle)
    }

    return(
       <div onClick={handleToggle} className='box_menu' >
            <div className={`box_links box_links_${toggle}`} >
                <Link to={'/'} >
                    <p>HOME</p>
                </Link>
                <Link to={'/login'} >
                    <p>INGRESAR</p>
                </Link>
                <Link to={'/signin'} >
                    <p>REGISTRARSE</p>
                </Link>
                <Link to={'/store'} >
                    <p>MIS VIDEOS</p>
                </Link>
                <p onClick={logout} >SALIR</p>
            </div>
            <span className={`dot top ${toggle}`} />
            <span className={`dot mid${toggle}`}/>
            <span className={`dot end${toggle} `} />
       </div>
    )
}

export default ButtonMenu