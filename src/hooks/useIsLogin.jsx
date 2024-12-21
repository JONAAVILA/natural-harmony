import { useNavigate } from "react-router-dom";

const useIsLogin = () => {
    const navigate = useNavigate()

    return ()=>{
        const user = localStorage.getItem('user');
        const parsedUser = JSON.parse(user);

        if (user && !parsedUser.seller) {
            try {
                if (parsedUser && parsedUser.values === null && parsedUser.isValidateLogin) {
                    navigate('/login')
                    return
                }
                if (parsedUser && parsedUser.values === null && !parsedUser.isValidateLogin) {
                    navigate('/validate')
                    return
                }
            } catch (error) {
                console.error("Error al parsear el usuario:", error)
                navigate('/validate')
                return
            }
        }

        if(user && parsedUser.seller){
            try {
                if (parsedUser && parsedUser.values.seller === null && parsedUser.isValidateLogin) {
                    navigate('/admin/login')
                    return
                }
                if (parsedUser && parsedUser.values.seller === null && !parsedUser.isValidateLogin) {
                    navigate('/admin/signin')
                    return
                }
            } catch (error) {
                console.error("Error al parsear el usuario:", error)
                window.alert('Ocurrió un error')
                return
            }
        }
            
        navigate('/validate')
        return
    }
}

export default useIsLogin;
