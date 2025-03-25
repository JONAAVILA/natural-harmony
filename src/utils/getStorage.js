const getStorage = (rol)=>{
    const data = localStorage.getItem(rol)
    if(!data) return console.log('no hay datos')
        
    const dataParse = JSON.parse(data)
    console.log('use',dataParse)

    return dataParse[rol]
}   

export default getStorage