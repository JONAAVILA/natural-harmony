import axios from "axios";

const {
    VITE_PRODUCTION,
    VITE_URL_GET_USER_DEV,
    VITE_URL_GET_USER_PRODUCTION
} = import.meta.env
const URL = VITE_PRODUCTION ? VITE_URL_GET_USER_PRODUCTION : VITE_URL_GET_USER_DEV

export default async function getUser() {
    const res = await axios.get(URL,{},{
        withCredentials:true
    })
    return res.data
}