import { validateCode } from "../../../utils/validate"
import { useFormik } from "formik"
import { useState } from "react"
import { ButtonCircle, LoadIcon } from '../../../components';
import './validateCode.modals.css'
import { confirmCode } from "../../../adapters";

const ValidateCode = ({email,handleModal,onSubmit,handleAlert})=>{
    const [loader, setloader] = useState(false)

    const formik = useFormik({
        initialValues:{
            code:''
        },
        validationSchema:validateCode,
        onSubmit: async (values)=>{
            setloader(!loader)
            const res = await confirmCode(values.code)
            if(res){
                onSubmit()
                handleModal()
                return
            }
            handleAlert(res)
            handleModal()
        }
    })

    return(
        <>
            <div className='box_admin_loader' >
                {loader && <LoadIcon size={80} />}
            </div>
            <div className="code_container" onClick={handleModal} />
            <div className="code_box" >
                <h2>VALIDA TU CODIGO</h2>
                <h3>te lo enviamos a {email}, revisa tu casilla de spam 😎</h3>
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
                    <ButtonCircle type='submit' color={'natural'}>
                        check
                    </ButtonCircle>
                </form>
                <div className="code_error" >
                    {formik.touched.code && formik.errors.code && <p>{formik.errors.code}</p>}
                </div>
            </div>
        </>
    )
}

export default ValidateCode