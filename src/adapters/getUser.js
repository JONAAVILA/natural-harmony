import axios from "axios";

const URL = ''

export default async function getUser() {
    const res = await axios.get(URL,{},{
        withCredentials:true
    })
    return res.data
}