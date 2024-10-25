import axios from "axios";

const URL = 'https://tienda-online-backend-riqf.onrender.com/users/check/email'
// const URL = 'http://localhost:3000/users/check/email'

export default async function confirmEmail(email){
    const res = await axios.post(URL,email,{
        withCredentials: true
    })
    return res.data
}