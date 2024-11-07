import axios from "axios";

const {
    VITE_PRODUCTION,
    VITE_URL_CONFIRM_EMAIL_DEV,
    VITE_URL_CONFIRM_EMAIL_PRODUCTION
} = import.meta.env
const URL = VITE_PRODUCTION === 'true' ? VITE_URL_CONFIRM_EMAIL_PRODUCTION : VITE_URL_CONFIRM_EMAIL_DEV

export default async function confirmEmail(email){
    const res = await axios.post(URL,email,{
        withCredentials: true
    })
    return res.data
}