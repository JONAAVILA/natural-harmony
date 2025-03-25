import { useEffect } from 'react'
import { useIsLogin } from '../../hooks'
import getStorage from '../../utils/getStorage'
import './profile.css'

const Profile = ()=>{
    const login = useIsLogin('user')
    const user = getStorage('user')
    
    useEffect(()=>{
        login()
    },[])
    
    const startName = user.name?.slice(0,user.name.length / 2).toUpperCase()
    const endName = user.name?.slice(user.name.length / 2).toUpperCase()
    const surname = user.surname?.toUpperCase()

    return(
        <section>
            <div className='container_heading_profile' >
                <h1 className='heading_profile' >
                    <span>{startName}</span>
                    <span>{endName}</span>
                </h1>
                <h2>{surname}</h2>
            </div>
            <div className='box_info_profile' >
                <img src="../../assets/yoga.png" alt="" />
                <div>
                    <h3>{user.email}</h3>
                    <h3>{user.location}</h3>
                    <h3>{user.country}</h3>
                </div>
            </div>
        </section>
    )
}

export default Profile