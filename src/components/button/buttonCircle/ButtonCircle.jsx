import './buttonCircle.css';
import Arrow from '../../icons/arrow/Arrow.icon';

const ButtonCircle = ({children,sideArrow,flip})=>{
    return(
        <div className={`box_custumButton ${flip}`} >
            <Arrow side={sideArrow} />
            <button className='custumButton' >
                {children}
            </button>
        </div>
    )
}

export default ButtonCircle