import axios from "axios"

const URL = 'https://tienda-online-backend-riqf.onrender.com/singin/code'

export default async function sendCode (){
    const res = await axios.post(URL,{},{
        withCredentials:true
    })
    console.log('sendCode:',res.data)
    return res.data
}