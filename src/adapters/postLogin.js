import axios from "axios";

const {
    VITE_PRODUCTION,
    VITE_URL_LOGIN_DEV,
    VITE_URL_LOGIN_PRODUCTION
} = import.meta.env
const URL = VITE_PRODUCTION ? VITE_URL_LOGIN_PRODUCTION : VITE_URL_LOGIN_DEV

export default async function postLogin(values){
    const user = {
        email:values.email,
        password:values.password
    }

    const res = await axios.post(URL,user,{
        withCredentials:true
    })
    console.log('postlogin:',res.data)
    return res.data
}