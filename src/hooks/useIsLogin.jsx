import { useNavigate } from "react-router-dom";

const useIsLogin = (users) => {
    const navigate = useNavigate()

    return ()=>{
        const user = localStorage.getItem('user');
        const parsedUser = JSON.parse(user);

        if (users === 'user') {
            try {
                if (parsedUser && parsedUser.values === null && parsedUser.isValidateLogin) {
                    navigate('/login')
                    return
                }
                if (parsedUser && parsedUser.values === null && !parsedUser.isValidateLogin) {
                    navigate('/validate')
                    return
                }
                navigate('/validate')
            } catch (error) {
                console.error("Error al parsear el usuario:", error)
                navigate('/validate')
                return
            }
        }

        if(users === 'admin'){
            try {
                if (parsedUser && parsedUser.values.seller === null && parsedUser.isValidateLogin) {
                    navigate('/admin/login')
                    return
                }
                if (parsedUser && parsedUser.values.seller === null && !parsedUser.isValidateLogin) {
                    navigate('/admin/signin')
                    return
                }
                navigate('/admin/signin')
            } catch (error) {
                console.error("Error al parsear el usuario:", error)
                navigate('/admin/signin')
                window.alert('Ocurrió un error')
                return
            }
        }
    }
}

export default useIsLogin;
