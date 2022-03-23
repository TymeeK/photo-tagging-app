import React, { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

function App() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const writeUser = async () => {
            const docRef = await addDoc(collection(db, 'users'), {
                name: 'Tim',
                age: 23,
            });
        };

        const fetchUsers = async () => {
            const data = await getDocs(collection(db, 'users'));
            setUser(data.docs.map(doc => ({ ...doc.data() })));
        };
        // writeUser();
        fetchUsers();
    }, []);

    return (
        <div className='App'>
            {user.map(user => {
                return (
                    <div>
                        <h1>Name: {user.name}</h1> <h1>Age: {user.age}</h1>{' '}
                    </div>
                );
            })}
        </div>
    );
}

export default App;
