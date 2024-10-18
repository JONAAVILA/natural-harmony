import axios from "axios";

const URL = 'http://localhost:3000/login'

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