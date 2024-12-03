import { useState } from 'react'
import './buttonMenu.css'

const ButtonMenu = ()=>{
    const [ toggle, setToggle ] = useState(false)

    const handleToggle = ()=>{
        setToggle(!toggle)
    }

    return(
       <div onClick={handleToggle} className='box_menu' >
           <span className={`dot top ${toggle}`} />
           <span className={`dot mid${toggle}`}/>
           <span className={`dot end${toggle} `} />
       </div>
    )
}

export default ButtonMenu