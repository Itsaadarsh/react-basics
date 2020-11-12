import React, {useState} from 'react'

const UserOutput = (props) => {
    console.log(props);
        return (
            <div className='UserOP'>
                <h2>{props.post.username}</h2>
                <p>{props.post.comment}</p>
            </div>
        )
}
export default UserOutput;