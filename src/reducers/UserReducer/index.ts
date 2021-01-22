import { FETCH_SINGLE_USER, FETCH_USERS, IUserState, UserDispatchTypes } from '../../actions/UserActions/type';



const defaultState : IUserState = {
    users: [],
    singleUser:null
}


const userReducer = (state = defaultState,action : UserDispatchTypes):IUserState => {
    switch(action.type){
        case FETCH_USERS:            
            return {...state,users:action.payload}
        case FETCH_SINGLE_USER:
            return {...state,singleUser:action.payload}
        default:
            return state;
    }
} 

export default userReducer;