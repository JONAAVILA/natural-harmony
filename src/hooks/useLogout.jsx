import { useNavigate } from "react-router-dom"

const useLogout = ()=>{
    const navigate = useNavigate()
    const user = localStorage.getItem('user')

    return ()=>{
        if(user.values.name){
            localStorage.clear()
            navigate('/')
        }
        navigate('/')
    }
}

export default useLogout