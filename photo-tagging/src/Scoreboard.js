import React, { useState, useEffect } from 'react';
import { getAllUsers } from './firebase-config';
import { Grid, Flex, Element } from './Styles/Scoreboard.Style';

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
        <Flex>
            <Grid numUsers={users.length}>
                {users.map((user, index) => {
                    return (
                        <Element key={index}>
                            <label>{user.username}</label>
                            <label> {user.seconds} seconds</label>
                        </Element>
                    );
                })}
            </Grid>
        </Flex>
    );
}
