import axios from "axios";

const VITE_PRODUCTION = import.meta.env.VITE_PRODUCTION
const VITE_URL_ADMIN_SIGNIN_DEV = import.meta.env.VITE_URL_ADMIN_SIGNIN_DEV
const VITE_URL_ADMIN_SIGNIN_PROD = import.meta.env.VITE_URL_ADMIN_SIGNIN_PROD

const URL = VITE_PRODUCTION === 'true' ? VITE_URL_ADMIN_SIGNIN_PROD : VITE_URL_ADMIN_SIGNIN_DEV

export default async function postAdminLogin(values){
    try {
        const admin = {
            seller:'harmonyNatural',
            email:values.email,
            password:values.password
        }
    
        const res = await axios.post(URL,admin,{
            withCredentials:true
        })
        console.log('postAdminLogin:',res.data)
        return res.data
    } catch (error) {
        return error.response.data.error
    }
}