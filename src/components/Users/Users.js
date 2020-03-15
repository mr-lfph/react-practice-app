import React from 'react';
import './Users.css';
import User from '../User/User';

function Users() {
    return (
        <div className="user-container">
            <h3>All users here </h3>
            <User></User>
        </div>
    )
}

export default Users
