import CheckEmail from '../../forms/validate/CheckEmail.form'
import './validateEmail.modal.css'

const ValidateEmail = ({handleModal})=>{
    return(
        <>
            <div className='container_email_modal' onClick={handleModal} >
            </div>
            <div className='box_email_modal' >
                <h2>INGRESA TU EMAIL</h2>
                <h3>VAMOS A VALIDAR TU EMAIL</h3>
                <CheckEmail/>
            </div>
        </>
    )
}

export default ValidateEmail