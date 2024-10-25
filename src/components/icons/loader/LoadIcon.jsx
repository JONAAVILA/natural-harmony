import { ping } from 'ldrs'

const LoadIcon = ({size})=>{
    ping.register()
    return(
        <>
            <l-ping
            size={size}
            speed="3" 
            color="#ffffff" 
            ></l-ping>
        </>
    )
}

export default LoadIcon