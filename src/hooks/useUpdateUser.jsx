import { useDispatch } from "react-redux"
import { updateUser } from "../redux/actions/actions"

const useUpdateUser = (values)=>{
    const dispatch = useDispatch()
    dispatch(updateUser(values))
}

export default useUpdateUser