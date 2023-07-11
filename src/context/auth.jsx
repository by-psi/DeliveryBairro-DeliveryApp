import React, { useState } from 'react';

const AuthContext = React.createContext({});

function AuthProvider(props){
    let isLogged = localStorage.getItem("logged");
    let delivery = localStorage.getItem("delivery");
    let token = localStorage.getItem("token");
    
    const [logged, setLogged] = useState(isLogged === "S" ? true : false);
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider value={{logged, setLogged, token, user, setUser, delivery}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};