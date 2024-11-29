import { useFormik } from "formik"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import confirmEmail from "../../../adapters/confirmEmail"
import { saveEmail } from '../../../redux/actions/actions'
import { validateEmail } from "../../../utils/validate"
import LoadIcon from "../../icons/loader/LoadIcon"
import './checkEmail.form.css'
import ButtonCircle from "../../button/buttonCircle/ButtonCircle"

const CheckEmail = ({handleModal})=>{
    const [loader, setloader] = useState(false)
    const navigate = useNavigate()
    const dispath = useDispatch()

    const formik = useFormik({
        initialValues:{
            email:''
        },
        validationSchema:validateEmail,
        onSubmit: async (values)=>{
            setloader(!loader)
            const check = await confirmEmail(values)
            
            if(check){
                dispath(saveEmail(values.email))
                setloader(!loader)
                handleModal()
                return
            }
            setloader(!loader)
            navigate('/login')
        }
    })

    return(
        <form className="email_form" onSubmit={formik.handleSubmit}>
            <div className="email_box_input" >
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className="email_box_loader" >
                    {loader && <LoadIcon size={35} />}
                </div>
                {
                    formik.touched.email && 
                    formik.errors.email && 
                    <p>
                        {formik.errors.email}
                    </p>
                }
            </div>
            <ButtonCircle type='submit' >
                CHECK
            </ButtonCircle>
        </form>
    )
}

export default CheckEmail