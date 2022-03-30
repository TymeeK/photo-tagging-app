import React, { useState, useEffect } from 'react';
import { getAllUsers } from './firebase-config';
import { Grid } from './Styles/Scoreboard.Style';

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
        <Grid numUsers={users.length}>
            {users.map((user, index) => {
                return (
                    <div key={index}>
                        <label htmlFor=''>{user.username}</label>
                        <label htmlFor=''> {user.seconds}</label>
                    </div>
                );
            })}
        </Grid>
    );
}
