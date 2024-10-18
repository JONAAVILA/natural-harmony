import { SAVE_EMAIL, SAVE_USER } from "./actions/actionsTypes";

const initialState = {
    user:{
        name:'',
        surname:'',
        email:'',
        password:'',
        phone:'',
        address:'',
        number:'',
        location:'',
        state:'',
        country:''
    }
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case SAVE_EMAIL:
            return{
                ...state,
                user:{
                    ...state.user,
                    email:action.payload
                }
            }
        case SAVE_USER:
            return{
                ...state,
                user:action.payload
            }
        default:
            return state
    }
}

export default rootReducer