import React from 'react'

export default function Validation(props) {
    return (
        <div>
            {props.textLen > 5 ? <h3>Text is too large</h3> 
            : <h3>Text is too small</h3>}
        </div>
    )
}
