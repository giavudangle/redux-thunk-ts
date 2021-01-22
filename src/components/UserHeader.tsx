import React, { Component } from 'react'
import {bindActionCreators, Dispatch} from 'redux'
import {connect, ConnectedProps} from 'react-redux'
import {FetchListUsers, GetUserById} from '../actions/UserActions'
import { IUser, IUserState } from '../actions/UserActions/type'
import { RootStore } from '../store'




interface IDispatchProps{
    getUserById : (id : number) => void,
    // (dispatch: Dispatch<UserDispatchTypes>) 
    // => Promise<void>' is not assignable to type 'void'.t
    getAllUsers : () => void
}

interface IStateProps {
    singleUser? : IUser | null ,
    users : IUser[]
}

const mapStateToProps = (state : RootStore) : IStateProps => {
    return {
        singleUser : state.usersReducer.singleUser,
        users:state.usersReducer.users
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
    componentDidMount(){
        this.props.getAllUsers();
    }

    render() {
        const user  = this.props.users.find((user) => user.id === this.props.userId)
        if(user === null) {
            return null;
        }
        return (
            <div className='header'>
                {user?.name}
            </div>
        )
    }
}


export default connector(UserHeader);