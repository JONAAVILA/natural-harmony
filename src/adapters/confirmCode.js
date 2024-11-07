import axios from "axios"

const {
    PRODUCTION,
    URL_CHECK_CODE_DEV,
    URL_CHECK_CODE_PRODUCTION
} = process.env
const URL = PRODUCTION ? URL_CHECK_CODE_PRODUCTION : URL_CHECK_CODE_DEV

export async function confirmCode(code){
    const res = await axios.post(URL,{code:code},{
        withCredentials:true
    })
    console.log('confirmcode:',res.data)
    return res.data
}   