import React from 'react'

function User(props) {
    const {name, avatar} = props;
    return (
        <li>
            <span>Name: {name}</span>
            <img src={avatar} alt={name}/>
        </li>
    )
}

export default User;