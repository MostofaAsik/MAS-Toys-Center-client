/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState("mas")

    const authInfo = {
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;