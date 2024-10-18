import axios from "axios";

const URL = 'http://localhost:3000/login/refresh'

export default async function refresh(password) {
    const res = await axios.post(URL,{password:password},{
        withCredentials:true
    })
    return res.data
}