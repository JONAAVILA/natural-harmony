import { useFormik } from 'formik';
import './siginAdmin.form.css';
import { validateAdmin } from '../../../utils/validate';
import { postAdmin } from '../../../adapters';
import { Alert, ButtonCircle } from '../../../components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpdateUser } from '../../../hooks';
import setStorage from '../../../utils/setStorage';

const SigninAdmin = ()=>{
    const [alert, setAlert] = useState(false)
    const updateUser = useUpdateUser()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            name:'',
            surname:'',
            seller:'harmonyNatural',
            email:'',
            password:''
        },
        validationSchema:validateAdmin,
        onSubmit: async (values)=>{
            const res = await postAdmin(values)
            if(res.name){
                setAlert(`Admin ${res.name} creado con exito 🚀`)
                updateUser(res)
                setStorage(res)
                setTimeout(()=>{
                    navigate('/admin')
                },3000)
            }else setAlert(res)
        }
    })

    const handleAlert = ()=>{
        setAlert('')
    }

    return(
        <div>
              {alert && <Alert handleAlert={handleAlert} >{alert}</Alert>}
            <form
                onSubmit={formik.handleSubmit}
                className='create_form_admin'
            >
                 <div>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Nombre"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
                    </div>
                    <input
                        type="text"
                        id='surname'
                        name='surname'
                        value={formik.values.surname}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Apellido"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.surname && formik.errors.surname && <p>{formik.errors.surname}</p>}
                    </div>
                    <input
                        type="text"
                        id='email'
                        name='email'
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="email"
                    />
                    <div className='box_signin_admin_errors' >
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
                    <div className='box_signin_admin_errors' >
                        {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
                    </div>
                </div>
                <div>
                    <ButtonCircle type='submit' >
                        CREAR
                    </ButtonCircle>
                </div>
            </form>
        </div>
    )
}

export default SigninAdmin