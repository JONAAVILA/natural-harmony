import { useNavigate } from "react-router-dom";

const useIsLogin = () => {
    const navigate = useNavigate()

    return ()=>{
        const user = localStorage.getItem('user');
        if (user) {
            try {
                const parsedUser = JSON.parse(user);
                if (parsedUser && parsedUser.values === null && parsedUser.isValidateLogin) {
                    navigate('/login')
                } else if (parsedUser && parsedUser.values === null && !parsedUser.isValidateLogin) {
                    navigate('/signin')
                }
            } catch (error) {
                console.error("Error al parsear el usuario:", error)
                navigate('/signin')
            }
        } else {
            navigate('/signin')
        }
    }
}

export default useIsLogin;
