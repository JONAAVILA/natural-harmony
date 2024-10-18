import { ping } from 'ldrs'

const LoadIcon = ({size})=>{
    ping.register()
    return(
        <>
            <l-ping
            size={size}
            speed="3" 
            color="#003550" 
            ></l-ping>
        </>
    )
}

export default LoadIcon