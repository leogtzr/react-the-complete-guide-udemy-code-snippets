import React from 'react'

function UserInput(props) {

    const style = {
        border: '2px solid red'
    };

    return (
        <div className="UserInput">
            <input 
            type="text" 
            name="userInput" 
            onChange={props.changed} 
            value={props.currentName} 
            style={style}
        />
        </div>
    )
}

export default UserInput
