import { Cross } from '../../../components'
import './alert.modal.css'

const Alert = ({children,handleAlert})=>{
    return(
        <>
            <div onClick={handleAlert} className='container_alert_modal'>
            </div>
            <div className='box_alert_modal' >
                <div className='box_cross' onClick={handleAlert} >
                    <Cross/>
                </div>
                <p>{children}</p>
            </div>
        </>
    )
}

export default Alert