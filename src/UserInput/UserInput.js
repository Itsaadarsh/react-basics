import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const Input = styled.input`
    color: ${props => props.error ? 'red': 'blue'};
`;

const UserInput = ({handlePosts}) => {
    
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const [error, setError] = useState(false);
    
    const setPost = () => {
        const newPost = {
            id: uuidv4(),
            username,
            comment
        };
        handlePosts(newPost);
        setUsername('');
        setComment('');
    }

    return(
        <div className='UserIP'>
            <Input 
                type='text' 
                value={username} 
                placeholder="Username" 
                onChange={(e) => setUsername(e.target.value)}
                error={error}
            />
            <Input 
                type='text'
                value={comment} 
                placeholder="Comment" 
                onChange={(e) => setComment(e.target.value)}
                error={error}
            />
            <button onClick={setPost}>POST</button>
            <button onClick={() => setError(true)}>Error!</button>
        </div>
    );  
}


export default UserInput