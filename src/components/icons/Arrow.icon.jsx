import './arrow.icon.css';

const Arrow = ({side})=>{
    return(
        <svg
            className={`arro_icon ${side}`}
            width="100"  
            height="120"  
            viewBox="0 0 24 24"  
            fill="none"  
            stroke="currentColor"  
            stroke-width="0.3"  
            stroke-linecap="round"  
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
        </svg>
    )
}

export default Arrow