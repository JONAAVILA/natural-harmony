import axios from "axios";

const {
    PRODUCTION,
    URL_REFRESH_DEV,
    URL_REFRESH_PRODUCTION
} = process.env
const URL = PRODUCTION ? URL_REFRESH_PRODUCTION : URL_REFRESH_DEV

export default async function refresh(password) {
    const res = await axios.post(URL,{password:password},{
        withCredentials:true
    })
    return res.data
}