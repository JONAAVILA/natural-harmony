import { useDispatch } from "react-redux"
import { updateUser } from "../redux/actions/actions"

const useGetStorage = ()=>{
    const dispatch = useDispatch()
    
    return ()=>{
        const user = localStorage.getItem('user')
        if(!user) return 'no hay datos'
        const userParse = JSON.parse(user)

        dispatch(updateUser(userParse))
    }
}

export default useGetStorage