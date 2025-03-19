import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateLogin } from '../../../utils/validate';
import { sendCode, postLogin, adminLogin } from '../../../adapters';
import { Alert, ValidateCode, ButtonCircle } from '../../../components';
import { useUpdateUser }from '../../../hooks';
import setStorage from '../../../utils/setStorage.js';
import './login.form.css';

const LoginForm = ({handleLoader,admin})=>{
    const navigate = useNavigate()
    const [alert, setalert] = useState('')
    const [modal, setmodal] = useState(false)
    const updateUser = useUpdateUser()

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:validateLogin,
        onSubmit: async (values)=>{
            handleLoader()
            if(!admin){
                const res = await postLogin(values)
                if(res.name){
                    setStorage(res)
                    updateUser(res)
                    navigate('/home')
                    return
                }
            }

            const res = await adminLogin(values)
            console.log('res:',res)
            if(res.name){
                setStorage(res)
                updateUser(res)
                handleLoader()
                navigate('/admin')
                return
            }
            if(res === 'validate user'){
                const codeRes = await sendCode()
                if(codeRes.error) {
                    handleLoader()
                    setalert(codeRes.error)
                    return
                }
                handleLoader()
                setmodal(!modal)
                return
            }
            handleLoader()
            setalert('Clave o correo incorrecto')
            return
        }
    })

    const handleAlert = ()=>{
        setalert('')
    }

    return(
        <div>
  
                {alert && <Alert handleAlert={handleAlert} >{alert}</Alert>}
                {modal && <ValidateCode validate={true} admin={admin} email={formik.values.email} password={formik.values.password} />}

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
        </div>
    )
}

export default LoginForm