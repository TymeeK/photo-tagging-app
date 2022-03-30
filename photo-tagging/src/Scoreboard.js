import React, { useState, useEffect } from 'react';
import { getAllUsers } from './firebase-config';
import {
    Table,
    Flex,
    TableHeader,
    TableDetails,
} from './Styles/Scoreboard.Style';

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
            <Table>
                <tr>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Seconds</TableHeader>
                </tr>
                {users.map((user, index) => {
                    return (
                        <tr key={index}>
                            <TableDetails>{user.username}</TableDetails>
                            <TableDetails>{user.seconds}</TableDetails>
                        </tr>
                    );
                })}
            </Table>
        </Flex>
    );
}
