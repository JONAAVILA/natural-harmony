import axios from "axios"

const URL = 'https://tienda-online-backend-riqf.onrender.com/singin/check/code'

export async function confirmCode(code){
    const res = await axios.post(URL,{code:code},{
        withCredentials:true
    })
    console.log('confirmcode:',res.data)
    return res.data
}   