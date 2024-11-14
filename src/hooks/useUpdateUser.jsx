import { useDispatch } from "react-redux"
import { updateUser } from "../redux/actions/actions"

const useUpdateUser = ()=>{
    const dispatch = useDispatch()
    return (values)=>dispatch(updateUser(values))
}

export default useUpdateUser