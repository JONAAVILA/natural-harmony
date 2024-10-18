import axios from "axios"

const URL = 'http://localhost:3000/singin/code'

export default async function sendCode (){
    const res = await axios.post(URL,{},{
        withCredentials:true
    })
    console.log('sendCode:',res.data)
    return res.data
}