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
    }, []);

    return (
        <div>
            {users.map(users => {
                return (
                    <div>
                        <label htmlFor=''>{users.username}</label>
                        <label htmlFor=''> {users.seconds}</label>
                    </div>
                );
            })}
        </div>
    );
}
