import axios from "axios";

const {
    PRODUCTION,
    URL_LOGIN_DEV,
    URL_LOGIN_PRODUCTION
} = process.env
const URL = PRODUCTION ? URL_LOGIN_PRODUCTION : URL_LOGIN_DEV

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