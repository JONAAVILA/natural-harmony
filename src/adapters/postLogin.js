import axios from "axios";

const URL = 'https://tienda-online-backend-riqf.onrender.com/login'

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