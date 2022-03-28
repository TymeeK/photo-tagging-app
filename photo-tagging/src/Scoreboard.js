import React, { useState, useEffect } from 'react';
import { getAllUsers } from './firebase-config';

export default function Scoreboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const tempUsers = await getAllUsers();
            setUsers(tempUsers);
        };
        getUsers();

        // setUsers(getAllUsers());
    }, []);

    useEffect(() => {
        console.log(users);
    }, [users]);

    //We want to make a call to firebase to retrieve all users
    return (
        <div>
            {users.map(users => {
                return (
                    <div>
                        <h1>{users.username}</h1>{' '}
                    </div>
                );
            })}
        </div>
    );
}
