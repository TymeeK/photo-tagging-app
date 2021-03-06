import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    doc,
    getDoc,
    addDoc,
    collection,
    getDocs,
} from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getData = async name => {
    const docRef = doc(db, 'characters', `${name}`);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
};

export const writeUser = async (name, seconds) => {
    const docRef = await addDoc(collection(db, 'users'), {
        username: `${name}`,
        seconds: `${seconds}`,
    });
};

export const getAllUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const users = querySnapshot.docs.map(doc => doc.data());
    return users;
};
