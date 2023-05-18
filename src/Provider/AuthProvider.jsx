/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createdUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        createdUser,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;