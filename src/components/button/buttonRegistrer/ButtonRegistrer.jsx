import { Link } from "react-router-dom"
import './buttonRegistrer.css'

const ButtonRegistrer = ({path})=>{
    return(
        <div className='box_button_registrer' >
            <Link to={path} >
                <h3>REGISTRARSE</h3>
            </Link>
        </div>
    )
}

export default ButtonRegistrer