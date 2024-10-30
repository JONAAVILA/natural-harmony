import './alert.modal.css'

const Alert = ({children})=>{
    return(
        <>
            <div className='container_alert_modal'>
            </div>
            <div className='box_alert_modal' >
                <p>{children}</p>
            </div>
        </>
    )
}

export default Alert