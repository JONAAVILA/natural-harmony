import { useSelector } from "react-redux"
import { validateCode } from "../../../utils/validate"
import { useFormik } from "formik"
import { useState } from "react"
import { confirmCode } from "../../../adapters/confirmCode"
import { useNavigate } from "react-router-dom"
import refresh from "../../../adapters/refresh"
import postUser from "../../../adapters/postUser"
import ButtonCircle from '../../button/buttonCircle/ButtonCircle';
import LoadIcon from "../../icons/loader/LoadIcon"
import './validateCode.modals.css'
import postLogin from "../../../adapters/postLogin"

const ValidateCode = ({validate,email,password})=>{
    const user = useSelector(state => state.user)
    const [loader, setloader] = useState(false)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            code:''
        },
        validationSchema:validateCode,
        onSubmit: async (values)=>{
            setloader(!loader)

            const code = values.code
            const resConfirm = await confirmCode(code)

            if(!validate && resConfirm === true){
                const resCreate = await postUser(user)
                if(resCreate === 'user created') navigate('/home')
                return
            }
            if(validate && resConfirm === true){
                const res = await refresh(password)
                console.log('refresh:',res)
                if(res === 'access'){ 
                    navigate('/home')
                    return
                }
                navigate('/login')
            }
        }
    })

    return(
        <>
            <div className="code_container"/ >
            <div className="code_box" >
                <h1>valida tu código</h1>
                {email ? (
                            <p>te lo enviamos a {email}, revisa tu casilla de spam 😎</p>
                        ):(
                            <p>te lo enviamos a {user.email}, revisa tu casilla de spam 😎</p>
                        )
                    }
                <form
                    onSubmit={formik.handleSubmit}
                >
                    <div className="code_box_input" >
                        <input
                            type="text"
                            id="code"
                            name="code"
                            value={formik.values.code}
                            placeholder="nombre"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="code_box_load" >
                            {loader && <LoadIcon size={35} />}
                        </div>
                    </div>
                    <ButtonCircle type='submit' color={'natural'} />
                </form>
                <div className="code_error" >
                    {formik.touched.code && formik.errors.code && <p>{formik.errors.code}</p>}
                </div>
            </div>
        </>
    )
}

export default ValidateCode