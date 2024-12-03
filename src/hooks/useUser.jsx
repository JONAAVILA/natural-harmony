import { useSelector } from "react-redux"

const useUser = (prop)=>{
    if(prop === 'validate'){
        const state = useSelector(state => state.user)
        console('state:',state)
        if(state.name) return true
        return false
    } 
    const state = useSelector(state => prop ? state.user[prop] : state.user)
    return state
}

export default useUser