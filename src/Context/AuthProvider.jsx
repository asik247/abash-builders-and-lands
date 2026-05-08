import React, { createContext } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FireBase/firebase.init';

const AuthProvider = ({children}) => {
    //?Register user code;
   const registerUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
   }
    const allInfo = {
      registerUser
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