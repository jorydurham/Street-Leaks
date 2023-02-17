import { createContext, useState, useEffect } from "react";
import { onAuthStateChangeListener, createUserDocumentFromAuth } from "../utilities/firebase/firebase.utilities";

// Actual value you want to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

// Actual component you will use
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};


    useEffect(() => {
       const unsubscribe = onAuthStateChangeListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
       });
       
        
       return unsubscribe;
    }, [])


    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}