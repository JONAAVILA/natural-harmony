import { useNavigate } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import './profile.css'
import { useEffect } from 'react'

const Profile = ()=>{
    const navigate = useNavigate()
    const user = useUser()
    const startName = user.name.slice(0,user.name.length / 2).toUpperCase()
    const endName = user.name.slice(user.name.length / 2).toUpperCase()
    const surname = user.surname.toUpperCase()

    useEffect(()=>{
        if(!user) navigate('/login')
    },[])

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
                <h3>{user.email}</h3>
                <h3>{user.location}</h3>
                <h3>{user.country}</h3>
            </div>
        </section>
    )
}

export default Profile