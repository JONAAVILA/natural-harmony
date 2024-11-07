import axios from "axios"

const {
    VITE_PRODUCTION,
    VITE_URL_CHECK_CODE_DEV,
    VITE_URL_CHECK_CODE_PRODUCTION
} = import.meta.env
const URL = VITE_PRODUCTION === 'true' ? VITE_URL_CHECK_CODE_PRODUCTION : VITE_URL_CHECK_CODE_DEV

export async function confirmCode(code){
    const res = await axios.post(URL,{code:code},{
        withCredentials:true
    })
    console.log('confirmcode:',res.data)
    return res.data
}   