import {combineReducers} from 'redux';
import postReducer from './PostReducer';
import userReducer from './UserReducer';


export default combineReducers({
    postsReducer : postReducer,
    usersReducer : userReducer
})