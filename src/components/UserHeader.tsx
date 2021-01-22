import React, { Component } from 'react'
import {bindActionCreators, Dispatch} from 'redux'
import {connect, ConnectedProps} from 'react-redux'
import {FetchListUsers, GetUserById} from '../actions/UserActions'
import { IUser, IUserState } from '../actions/UserActions/type'




interface IDispatchProps{
    getUserById : (id : string) => void,
    // (dispatch: Dispatch<UserDispatchTypes>) 
    // => Promise<void>' is not assignable to type 'void'.t
    getAllUsers : () => void
}

interface IStateProps {
    singleUser? : IUser | null 
}

const mapStateToProps = (state : IUserState) : IStateProps => {
    return {
        singleUser : state.singleUser
    }
}

const mapDispatchToProps = (dispatch : Dispatch) : IDispatchProps=> {
    return {
        getUserById : bindActionCreators((id) => GetUserById(id),dispatch),
        getAllUsers : bindActionCreators(() => FetchListUsers(),dispatch)
    }
} 

const connector = connect(mapStateToProps,mapDispatchToProps);

type ParentPassProps = {
    userId : number
}
type Props = ConnectedProps<typeof connector> & ParentPassProps ;

class UserHeader extends Component<Props> {
    state = {}

    render() {
        console.log(this.props);
        
        return (
            <div>
                USers
            </div>
        )
    }
}


export default connector(UserHeader);