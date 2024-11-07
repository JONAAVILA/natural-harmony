import axios from "axios";

const {
    VITE_PRODUCTION,
    VITE_URL_REFRESH_DEV,
    VITE_URL_REFRESH_PRODUCTION
} = import.meta.env
const URL = VITE_PRODUCTION ? VITE_URL_REFRESH_PRODUCTION : VITE_URL_REFRESH_DEV

export default async function refresh(password) {
    const res = await axios.post(URL,{password:password},{
        withCredentials:true
    })
    return res.data
}