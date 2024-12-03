import { useNavigate } from "react-router-dom"

const useLogout = ()=>{
    const navigate = useNavigate()
    const user = localStorage.getItem('user')
    
    return ()=>{
        if(user.name){
            localStorage.clear()
            navigate('/')
            return
        }
        navigate('/login')
        return
    }
}

export default useLogout