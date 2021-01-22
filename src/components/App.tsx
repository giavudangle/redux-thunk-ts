import React from 'react';
import PostList from './PostList';

const App : React.FC = () => {
    return(
        <div className='ui container'>
            <div className=''>
                <PostList/>
            </div>
        </div>
    )
}

export default App;