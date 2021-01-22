import { Dispatch } from "react"
import { OperationCanceledException } from "typescript";
import jsonApi from "../../apis/jsonApi"
import { FETCH_USERS, UserDispatchTypes } from "./type"


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


export const GetUserById = (id:string)  =>  
    async(dispatch : Dispatch<UserDispatchTypes>) : Promise<void> => {
        try {
            const response = await jsonApi.get(`/users/${id}`);
            dispatch({
                type:FETCH_USERS,
                payload:response.data
            })
        }catch(e) {
            throw new OperationCanceledException();
        }
      
};