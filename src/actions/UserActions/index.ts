import { Dispatch } from "react"
import { OperationCanceledException } from "typescript";
import jsonApi from "../../apis/jsonApi"
import { FETCH_SINGLE_USER, FETCH_USERS, UserDispatchTypes } from "./type"
import _ from 'lodash'

export const FetchListUsers = () => async(dispatch : Dispatch<UserDispatchTypes>) : Promise<void> => {
    try {
        const response = await jsonApi.get('/users');
        dispatch({
            type:"FETCH_USERS",
            payload:response.data
        })
    } catch(e) {
        throw new OperationCanceledException();
    }
   
}

const _memoizedGetUserById = _.memoize(async (id:number,dispatch : Dispatch<UserDispatchTypes>) => {
    const response = await jsonApi.get(`/users/${id}`);
    dispatch({
        type:FETCH_SINGLE_USER,
        payload:response.data
    })
})

export const GetUserById =
(id:number)  =>  
(dispatch : Dispatch<UserDispatchTypes>) => 
_memoizedGetUserById(id,dispatch);


