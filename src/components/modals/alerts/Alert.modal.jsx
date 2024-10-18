const Alert = ({children})=>{
    return(
        <span style={{
            width:'400px',
            height:'200px',
            borderRadius:'20px',
            display:'grid',
            justifyContent:'center',
            alignItems:'center',
            background:'#ffffff'
        }} >
            <p>{children}</p>
        </span>
    )
}

export default Alert