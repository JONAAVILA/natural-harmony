import axios from "axios";

const VITE_PRODUCTION = import.meta.env.VITE_PRODUCTION
const VITE_URL_GET_USER_DEV = import.meta.env.VITE_URL_GET_USER_DEV
const VITE_URL_GET_USER_PRODUCTION = import.meta.env.VITE_URL_GET_USER_PRODUCTION

const URL = VITE_PRODUCTION === 'true' ? VITE_URL_GET_USER_PRODUCTION : VITE_URL_GET_USER_DEV

export default async function getUser() {
    const res = await axios.get(URL,{},{
        withCredentials:true
    })
    return res.data
}