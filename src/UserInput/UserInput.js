import React, {useState} from 'react'

const UserInput = ({posts, handlePosts}) => {

    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const setPost = () => {
        handlePosts([...posts, {username, comment}]);
    }

    return(
        <div className='UserIP'>
            <input type='text' value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <input type='text' value={comment} placeholder="Comment" onChange={(e) => setComment(e.target.value)}/>
            <button onClick={setPost}>POST</button>
        </div>
    );  
}


export default UserInput