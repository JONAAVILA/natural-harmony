import './buttonStyle.css';

const Button = ({color,children})=>{
    return(
        <>
            <button
                className={`button_gradient ${color}`}
            >
                {children}
            </button>
        </>
    )
}

export default Button