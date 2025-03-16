
const setStorage = (values,rol)=>{
    if(rol === 'user'){
        const user = JSON.stringify(
            {
                user:values,
            }
        )
        localStorage.setItem('user',user)
    }
    if(rol === 'admin'){
        const admin = JSON.stringify(
            {
                admin:values
            }
        )
        localStorage.setItem('admin',admin)
    }
}

export default setStorage