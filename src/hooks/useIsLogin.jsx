import { useNavigate } from "react-router-dom";

const useIsLogin = (rols) => {
    const navigate = useNavigate()  

    return ()=>{
        const rol = localStorage.getItem(rols)
        const parseRol = JSON.parse(rol)

        if (parseRol && parseRol.user === 'user') {
            navigate('/store')
            return
        }
        if(!parseRol && rols === 'user'){
            navigate('/login')
            return
        }

        if(parseRol && parseRol.admin === 'admin'){
            navigate('/admin')
            return
        }
        if(!parseRol && rols === 'admin'){
            navigate('/admin/login')
            return
        }
    }
}

export default useIsLogin;
