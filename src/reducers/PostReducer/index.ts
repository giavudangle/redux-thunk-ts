import React from 'react'
import { FETCH_POSTS, IPost, PostDispatchTypes } from '../../actions/PostActions/types';

interface IDefaultPost {
    posts:IPost[]
}


const defaultState : IDefaultPost = {
    posts:[]
}

const postReducer = (state: IDefaultPost = defaultState,action : PostDispatchTypes ) 
: IDefaultPost => {
    switch(action.type){
        case FETCH_POSTS:
            return {
                posts:action.payload
            }
        default:
            return state
    }
} 

export default postReducer;