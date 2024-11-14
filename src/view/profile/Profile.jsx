import { useNavigate } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import './profile.css'
import { useEffect } from 'react'

const Profile = ()=>{
    const navigate = useNavigate()
    const user = useUser()

    useEffect(()=>{
        if(!user) navigate('/login')
    },[])

    return(
        <section>
            <h1>{user.name}</h1>
            <h2>{user.surname}</h2>
        </section>
    )
}

export default Profile