import jsonApi from '../../apis/jsonApi';
import { Dispatch } from 'redux';

import { FETCH_POSTS, IPost, PostDispatchTypes } from './types';

// GetPosts() => async() => return Promise<void> 
export const GetPosts = () => async (dispatch: Dispatch<PostDispatchTypes>) : Promise<void> => {
    const response = await jsonApi.get('/posts');
    console.log(response);
    
    dispatch({
        type:FETCH_POSTS,
        payload:response.data
    })
}