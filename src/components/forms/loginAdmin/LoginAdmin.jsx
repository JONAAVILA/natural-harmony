import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ValidateCode from '../../modals/validateCode/ValidateCode.modals'
import './loginAdmin.css'
import ButtonCircle from '../../button/buttonCircle/ButtonCircle'
import { useFormik } from 'formik'
import { validateLogin } from '../../../utils/validate'
import Alert from '../../modals/alerts/Alert.modal'
import { adminLogin, sendCode } from '../../../adapters'
import setStorage from '../../../utils/setStorage'
import LoadIcon from '../../icons/loader/LoadIcon'

const LoginAdmin = ()=>{
    const [alert, setalert] = useState('')
    const [modal, setmodal] = useState(false)
    const [loader,setLoader] = useState(false)
    const navigate = useNavigate()
    
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:validateLogin,
        onSubmit: async (values)=>{
            setLoader(true)
            const res = await adminLogin(values)
            setLoader(false)
            console.log('form:',res.name)

            if(res.name){
                setStorage(res,'admin')
                navigate('/admin')
                return
            }
            if(res === 'validate user'){
                const resCode = await sendCode()
                if(resCode.error) {
                    setalert(resCode.error)
                    return
                }
                handleModal()
                return
            }
            setalert('Constraseña o email incorrectos! 🤦‍♂️')
        }
    })

    const handleAlert = ()=>{
        setalert('')
    }
    const handleModal = ()=>{
        setmodal(!modal)
    }

    return(
        <section>
            {alert && <Alert handleAlert={handleAlert} >{alert}</Alert>}
            {
                modal && <ValidateCode
                            onSubmit={formik.handleSubmit} 
                            handleModal={handleModal} 
                            handleAlert={handleAlert} 
                            email={formik.values.email} 
                         />
            }
            <div className='box_admin_loader' >
                {loader && <LoadIcon size={80} />}
            </div>
            <form
                onSubmit={formik.handleSubmit}
                className='login_form'
            >
                <div>
                    <input
                        type="text"
                        id='email'
                        name='email'
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="email"
                    />
                    <div className='box_login_errors' >
                        {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                    </div>
                    <input
                        type="text"
                        id='password'
                        name='password'
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="password"
                    />
                    <div className='box_login_errors' >
                        {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
                    </div>
                </div>
                <div>
                    <ButtonCircle type='submit' >
                        LOGIN
                    </ButtonCircle>
                </div>
            </form>
        </section>
    )
}

export default LoginAdmin