import axios from "axios"

const {
    PRODUCTION,
    URL_SEND_CODE_DEV,
    URL_SEND_CODE_PRODUCTION
} = process.env
const URL = PRODUCTION ? URL_SEND_CODE_PRODUCTION : URL_SEND_CODE_DEV

export default async function sendCode (){
    const res = await axios.post(URL,{},{
        withCredentials:true
    })
    console.log('sendCode:',res.data)
    return res.data
}