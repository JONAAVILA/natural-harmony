import axios from "axios";

const {
    PRODUCTION,
    URL_POST_USER_DEV,
    URL_POST_USER_PRODUCTION
} = process.env
const URL = PRODUCTION ? URL_POST_USER_PRODUCTION : URL_POST_USER_DEV

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