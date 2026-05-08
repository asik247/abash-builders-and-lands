import React, { createContext } from 'react';
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    //?Register user code;
    const registerUser = (email,password) =>{
        return ''
    }
    const allInfo = {
        name:'ar',
        age:21
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