import axios from "axios"

const URL = import.meta.env.VITE_URL_ADMIN_SIGNIN_PROD

const postLoginAdmin = async (values)=>{
    const res = await axios.post(URL,values,{
        withCredentials:true
    })
    console.log('postAdmin',res.data)
    return res.data
}

export default postLoginAdmin