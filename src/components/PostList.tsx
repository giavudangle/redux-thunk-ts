import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import { IRootState } from '../interfaces/IRootState';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';

import { FETCH_POSTS, IPost, PostDispatchTypes } from '../actions/PostActions/types';
import { RootStore } from '../store';
import { GetPosts } from '../actions/PostActions';
import UserHeader from './UserHeader';

interface IDispatchProps {
    fetchListPosts : () => void
}

interface IStateProps {
    posts:IPost[]
}

const mapDispatchToProps = (dispatch : Dispatch) : IDispatchProps => {
    return {
        // Use bindActionCreators here (because it isnt function (object))
        fetchListPosts: bindActionCreators(GetPosts,dispatch) 
    }
}

const mapStateToProps = (state : RootStore) : IStateProps=> {
    return{
        posts:state.postsReducer.posts
    }
}

const connector = connect(mapStateToProps,mapDispatchToProps);

// Connect types inject to component between mapStateToProps & mapDispatchToProps
type PropsFromRedux = ConnectedProps<typeof connector>

// Add Some type you want inject to props of component
type Props = PropsFromRedux ;


class PostList extends React.Component<Props>{

    componentDidMount(){
        this.props.fetchListPosts();
    }

    renderList():JSX.Element[]{
        return this.props.posts.map((post) => {
            return(
                <div className="item" key={post.id}>
                    <i className='large middle align icon user'/>
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>


                    </div>
                </div>
            )
        })
    }


    render():JSX.Element{
        return(
            <div className='ui relaxed divided list'>
                {this.renderList()}

            </div>
        )
    }
}

export default connector(PostList)