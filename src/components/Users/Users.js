import React, { useState } from 'react';
import './Users.css';
import User from '../User/User';
import fakeData from '../../fakeData/user';
import Friends from '../Friends/Friends';


const Users = () => {
    const users = [];
    const [userData, setUserData] = useState(users);
    const [friends, setFriend] = useState([]);
    const friendHandler = (user) => {
        const totalFriend = [...friends, user]
        setFriend(totalFriend)
    }

    formattedData(fakeData)
    function formattedData(userArray) {
        for (let index = 0; index < userArray.length; index++) {
            const user = userArray[index];
            const formatUser = {
                name: user.name.first + " " + user.name.last,
                email: user.email,
                img: user.picture.large,
                username: user.login.username,
                phone: user.phone,
                address: user.location,
                gender: user.gender,
                income: Math.floor((Math.random() * (1000 - 500) + 500)),
            }
            users.push(formatUser)
        }
    }

    return (
        <div className="main-body">
            <div className="user-container">
                {userData.map(user => <User user={user} friendHandler={friendHandler} ></User>)}
            </div>
            <div className="friends-status">
                <Friends friends={friends}  ></Friends>
            </div>
            </div>
    )
}

export default Users
