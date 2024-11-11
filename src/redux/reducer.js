import { SAVE_EMAIL, SAVE_USER, UPDATE_USER } from "./actions/actionsTypes";

const initialState = {
    isLogin:false,
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
        case UPDATE_USER:
            return{
                ...state,
                user:{
                    ...state.user,
                    name:action.payload.name,
                    surname:action.payload.surname,
                    location:action.payload.location,
                    country:action.payload.country
                }
            }
        default:
            return state
    }
}

export default rootReducer