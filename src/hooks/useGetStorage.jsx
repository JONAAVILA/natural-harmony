import { useDispatch } from "react-redux"
import { updateUser } from "../lib/redux/actions/actions"

const useGetStorage = ()=>{
    const dispatch = useDispatch()
    
    return ()=>{
        const user = localStorage.getItem('user')
        if(!user) return console.log('no hay datos')
        const userParse = JSON.parse(user)
    
        dispatch(updateUser(userParse))
    }
}

export default useGetStorage