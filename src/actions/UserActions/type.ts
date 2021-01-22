export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_SINGLE_USER = 'FETCH_SINGLE_USER';

export interface IUser {
    id:number,
    name: string,
    username: string,
    email: string,
    address: TAddress,
    phone: string,
    website:string,
    company: TCompany,
}

type TAddress = {
    street: string,
    suite: string
    city: string,
    zipcode: string,
    geo:TGeo
} 

type TGeo  = {
    lat: number,
    lng: number
}

type TCompany = {
    name: string,
    catchPhrase:string,
    bs: string
}


interface IFetchUsers {
    type: typeof FETCH_USERS,
    payload: IUser[]
}

interface IFetchUserById{
    type: typeof FETCH_SINGLE_USER,
    payload: IUser
}

export interface IUserState {
    readonly users: IUser[],
    readonly singleUser? :IUser | null,
}

export type UserDispatchTypes =  IFetchUsers | IFetchUserById ;