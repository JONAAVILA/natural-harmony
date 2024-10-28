import { useSelector } from "react-redux"

const useUser = (prop)=>{
    if(prop === 'validate'){
        const state = useSelector(state => state)
        if(state.name) return true
        return false
    } 
    const state = useSelector(state => prop ? state[prop] : state)
    return state
}

export default useUser