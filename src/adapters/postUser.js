import axios from "axios";

const URL = 'https://tienda-online-backend-riqf.onrender.com/singin'
// const URL = 'http://localhost:3000/singin'

export default async function postUser (values){
    try {
        const user = await axios.post(URL,values,{
            withCredentials:true
        })
        console.log(user.data)
        return user.data
    } catch (error) {
        console.log(error.response.data.error)
    }
}