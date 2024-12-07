import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateLogin } from '../../../utils/validate';
import { sendCode, postLogin } from '../../../adapters/users';
import { Alert, ValidateCode, ButtonCircle } from '../../../components';
import useUpdateUser from '../../../hooks/useUpdateUser.jsx';
import setStorage from '../../../utils/setStorage.js';
import './login.form.css';

const LoginForm = ({handleLoader})=>{
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
            const res = await postLogin(values)
            if(res.name){
                console.log('res',res)
                setStorage(res)
                updateUser(res)
                navigate('/home')
                return
            }
            if(res === 'validate user'){
                const codeRes = await sendCode()
                if(codeRes.error) {
                    setalert(codeRes.error)
                    return
                }
                setmodal(!modal)
                return
            }
            setalert('Clave o correo incorrecto')
            handleLoader()
            return
        }
    })

    const handleAlert = ()=>{
        setalert('')
    }

    return(
        <div>
  
                {alert && <Alert handleAlert={handleAlert} >{alert}</Alert>}
                {modal && <ValidateCode validate={true} email={formik.values.email} password={formik.values.password} />}

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