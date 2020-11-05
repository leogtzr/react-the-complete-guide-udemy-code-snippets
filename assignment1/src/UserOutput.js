import React from 'react';
import './UserOutput.css';

function UserOutput( {username }) {
    return (
        <div className="UserOutput">
            <p>Hello: {username}</p>
            <p>Welcome!</p>
        </div>
    )
}

export default UserOutput
