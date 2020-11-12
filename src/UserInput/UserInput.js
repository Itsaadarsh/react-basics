import React, {Component} from 'react'

class UserInput extends Component{
    render() {
        return (
            <div className='UserIP'>
                <input type='text' placeholder="Username"/>
                <input type='text' placeholder="Comment"/>
                <button>POST</button>
            </div>
        )
    }
}

export default UserInput