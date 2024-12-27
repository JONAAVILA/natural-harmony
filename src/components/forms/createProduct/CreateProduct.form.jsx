import { useFormik } from "formik"

const CreateProduct = ()=>{

    const formik = useFormik({
        initialValues:{
            tittle:'',
            description:'',
            image:'',
            price:'',

        },
        validationSchema:'',
        onSubmit:''
    })
    
    return(
        <form
            onSubmit={formik.handleSubmit}
        >
            <input
                type="text"
                id='tittle'
                name='tittle'
                value={formik.values.tittle}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Título"
            />
            <div>
                {formik.touched.tittle && formik.errors.tittle && <p>{formik.errors.tittle}</p>}
            </div>
        </form>
    )
}

export default CreateProduct