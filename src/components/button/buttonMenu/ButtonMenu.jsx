import './buttonMenu.css'

const ButtonMenu = ()=>{
    return(
        <svg
            className='button_menu_icon'
            width="24"  
            height="24"  
            viewBox="0 0 24 24"  
            fill="none"  
            stroke="currentColor"  
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path className='path1' d="M4 6l16 0" />
            <path className='path2' d="M4 12l16 0" />
            <path className='path3' d="M4 18l16 0" />
        </svg>
    )
}

export default ButtonMenu