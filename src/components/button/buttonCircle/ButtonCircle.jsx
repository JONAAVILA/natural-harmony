import './buttonCircle.css';
import Arrow from '../../icons/arrow/Arrow.icon';
import { Link } from 'react-router-dom';

const ButtonCircle = ({children,sideArrow,flip,path,handleModal})=>{
    return(
        <>
            {handleModal || path ? (<div className={`box_custumButton ${flip}`} >
                <Arrow side={sideArrow} />
                <Link to={path} >
                    <button 
                        className='custumButton'
                        onClick={handleModal}
                    >
                        {children}
                    </button>
                </Link>
            </div>):(
                <div className={`box_custumButton ${flip}`} >
                    <Arrow side={sideArrow} />
                    <button 
                        className='custumButton'
                    >
                        {children}
                    </button>
                </div> 
            )}
        </>
    )
}

export default ButtonCircle