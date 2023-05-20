import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create a user

    const createUser = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in 

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // observe user

    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current User', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }

    }, [])

    const authInfo = {
        user, loading, createUser, signIn

    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;