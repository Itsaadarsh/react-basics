import React from 'react'

const UserOutput = (props) => {
        return (
            <div className='UserOP'>
                <h2>{props.post.username}</h2>
                <p>{props.post.comment}</p>
            </div>
        )
}
export default UserOutput;