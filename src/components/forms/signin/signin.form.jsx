import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { useState } from 'react'
import { validateUser } from '../../../utils/validate'
import { Alert, ButtonCircle, LoadIcon, ValidateCode } from '../../../components';
import { postUser, sendCode } from '../../../adapters'
import setStorage from '../../../utils/setStorage'
import './signin.form.css'
import { useNavigate } from 'react-router-dom';

const CreateUser = ()=>{
    const [alert, setalert] = useState('')
    const [modal, setmodal] = useState(false)
    const [loader,setLoader] = useState(false)
    const navigate = useNavigate()
    const { t } = useTranslation()

    const formik = useFormik({
        initialValues:{
            name:'',
            surname:'',
            email:'',
            password:'',
            phone:'',
            address:'',
            number:'',
            location:'',
            state:'',
            country:''
        },
        validationSchema:validateUser,
        onSubmit: async (values)=>{
            setLoader(!loader)
            const res = await postUser(values)
            console.log('response:',res)
            if(res.name){
                setLoader(false)
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
            setLoader(false)
            setalert(`Se produjo un error al crear el usuario! 🤦‍♂️ Error: ${res}`)
        }
    })

    const handleModal = ()=>{
        setmodal(!modal)
    }
    const handleAlert = ()=>{
        setalert(!alert)
    }

    return(
        <>
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
            className="create_form"
            >
                <div>
                    <div className="create_box_form" >
                        <h2>{t('registrate')}</h2>
                        <h3>{t('completaLosDatosParaCrearTuUsuario')}</h3>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            placeholder={t('nombre')}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="form_user_error" >
                        {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
                        </div>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            value={formik.values.surname}
                            placeholder={t('apellido')}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="form_user_error" >
                            {formik.touched.surname && formik.errors.surname && <p>{formik.errors.surname}</p>}
                        </div>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            placeholder={t('email')}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="form_user_error" >
                            {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                        </div>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            value={formik.values.password}
                            placeholder={t('contraseña')}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="form_user_error" >
                            {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
                        </div>
                    </div>
                    <div className="create_box_form" >
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formik.values.phone}
                            placeholder={t('telefono')}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="form_user_error" >
                            {formik.touched.phone && formik.errors.phone && <p>{formik.errors.phone}</p>}
                        </div>
                        <div className='box_input_address' >
                            <div>
                                <input
                                    className='input_address'
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formik.values.address}
                                    placeholder={t('calle')}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div className="form_user_error" >
                                    {formik.touched.address && formik.errors.address && <p>{formik.errors.address}</p>}
                                </div>
                            </div>
                            <div>
                                <input
                                    className='input_number'
                                    type="text"
                                    id="number"
                                    name="number"
                                    value={formik.values.number}
                                    placeholder={t('numero')}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div className="form_user_error" >
                                    {formik.touched.number && formik.errors.number && <p>{formik.errors.number}</p>}
                                </div>
                            </div>
                        </div>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formik.values.location}
                            placeholder={t('localidad')}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="form_user_error" >
                            {formik.touched.location && formik.errors.location && <p>{formik.errors.location}</p>}
                        </div>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formik.values.state}
                            placeholder={t('provincia')}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="form_user_error" >
                            {formik.touched.state && formik.errors.state && <p>{formik.errors.state}</p>}
                        </div>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formik.values.country}
                            placeholder={t('pais')}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="form_user_error" >
                            {formik.touched.country && formik.errors.country && <p>{formik.errors.country}</p>}
                        </div>
                    </div>
                </div>
                <div className='box_signin_button' >
                    <ButtonCircle
                        type='submit' 
                        flip={'vertical'}
                    >
                        {t('crear')}
                    </ButtonCircle>
                </div>
            </form>
        </>
    )
}

export default CreateUser