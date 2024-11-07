import axios from "axios";

const {
    PRODUCTION,
    URL_GET_USER_DEV,
    URL_GET_USER_PRODUCTION
} = process.env
const URL = PRODUCTION ? URL_GET_USER_PRODUCTION : URL_GET_USER_DEV

export default async function getUser() {
    const res = await axios.get(URL,{},{
        withCredentials:true
    })
    return res.data
}