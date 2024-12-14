import { types } from "../types/types";


export const authReducer =(state = {}, action)=>{
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logOut:
            return {
                loggged: false,
            };
        
        default:
            return state;
    }
}