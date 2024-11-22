
const setStorage = (values)=>{
    const user = JSON.stringify(values)
    localStorage.setItem('user',user)
}

export default setStorage