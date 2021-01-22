export const FETCH_POSTS = 'FETCH_POSTS';

export interface IPost {
    userId: number,
    id:number,
    title:string,
    body:string
}


interface IFetchPosts {
    type: typeof FETCH_POSTS,
    payload: IPost[]
}

export type PostDispatchTypes = IFetchPosts;