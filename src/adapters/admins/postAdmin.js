import axios from "axios";

const VITE_PRODUCTION = import.meta.env.VITE_PRODUCTION
const VITE_URL_ADMIN_SIGNIN_DEV = import.meta.env.VITE_URL_ADMIN_SIGNIN_DEV
const VITE_URL_ADMIN_SIGNIN_PROD = import.meta.env.VITE_URL_ADMIN_SIGNIN_PROD

const URL = VITE_PRODUCTION === 'true' ? VITE_URL_ADMIN_SIGNIN_PROD : VITE_URL_ADMIN_SIGNIN_DEV

console.log(URL)

export default async function postAdmin(values){
    try {
        const admin = {
            name:values.name,
            surname:values.surname,
            email:values.email,
            password:values.password
        }
    
        const res = await axios.post(URL,admin,{
            withCredentials:true
        })

        return res.data
    } catch (error) {
        return error.response.data.error
    }
}