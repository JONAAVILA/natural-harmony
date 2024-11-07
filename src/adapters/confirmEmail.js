import axios from "axios";

const {
    PRODUCTION,
    URL_CONFIRM_EMAIL_DEV,
    URL_CONFIRM_EMAIL_PRODUCTION
} = process.env
const URL = PRODUCTION ? URL_CONFIRM_EMAIL_PRODUCTION : URL_CONFIRM_EMAIL_DEV

export default async function confirmEmail(email){
    const res = await axios.post(URL,email,{
        withCredentials: true
    })
    return res.data
}