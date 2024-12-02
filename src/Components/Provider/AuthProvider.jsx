import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useContext, useState } from 'react'
import { auth } from '../Firebase/Firebase.init'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    const userInfo = {
        user,
        loading,
        createUser,
        loginUser
    }


    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
