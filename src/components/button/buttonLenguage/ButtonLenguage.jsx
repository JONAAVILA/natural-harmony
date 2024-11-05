import { useState } from 'react'
import LenguageIcon from '../../icons/lenguage/Lenguage.icon'
import './buttonLenguage.css'
import { useEffect } from 'react'

const ButtonLenguage = ({handleLenguage})=>{
    const [lenguage, setLenguage] = useState('es')

    useEffect(()=>{
        document
            .getElementById(lenguage)
            .scrollIntoView({
                behavior:'smooth'
            })
        
        handleLenguage(lenguage)
    },[lenguage])

    const changelg = ()=>{
        if(lenguage === 'es') setLenguage('it')
        if(lenguage === 'it') setLenguage('es')
    }

    
    return(
        <div className='container_lenguage_button' >
            <button className='button_lenguage' onClick={()=>changelg()} >
                <LenguageIcon/>
            </button>
            <div className='box_lenguages' >
                <p id='it' >italiano</p>
                <p id='es' >español</p>
            </div>
        </div>
    )
}

export default ButtonLenguage