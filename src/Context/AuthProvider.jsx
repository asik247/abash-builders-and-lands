import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword,GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../FireBase/firebase.init';
 const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUsre] = useState(null)
    //?Register user code;
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
   

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUsre(currentUser)
        })
        return () => unsubscribe();
    }, [])

    const allInfo = {
        registerUser,
        logInUser,
        user,
        logOut,
        googleLogin
    }
    return (
        <div>
            <AuthContext value={allInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;