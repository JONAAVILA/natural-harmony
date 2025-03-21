import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateLogin } from '../../../utils/validate';
import { sendCode, postLogin } from '../../../adapters';
import { Alert, ValidateCode, ButtonCircle } from '../../../components';
import setStorage from '../../../utils/setStorage.js';
import './login.form.css';

const LoginForm = ({handleLoader})=>{
    const navigate = useNavigate()
    const [alert, setalert] = useState('')
    const [modal, setmodal] = useState(false)

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:validateLogin,
        onSubmit: async (values)=>{
            handleLoader()
            const res = await postLogin(values)
            console.log('formlOGINuser:',res.name)

            if(res.name){
                setStorage(res,'user')
                navigate('/store')
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
        handleLoader()
        setalert('')
    }
    const handleModal = ()=>{
        handleLoader()
        setmodal(!modal)
    }

    return(
        <div>
  
            {alert && <Alert handleAlert={handleAlert} >{alert}</Alert>}
            {
                modal && <ValidateCode
                            onSubmit={formik.handleSubmit} 
                            handleModal={handleModal} 
                            handleAlert={handleAlert} 
                            email={formik.values.email} 
                            password={formik.values.password} 
                         />
            }

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