
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const  [loading , setLoading]=useState(true);

    const createuser= (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

        const signIn = (email, password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,  email, password)
        }

        const logOut=()=>{
            setLoading(true);
            return signOut(auth);
        }


     useEffect(()=>{
       const unsubscirbe=  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            return unsubscirbe();
        }
     },[])


    const authInfo={
        user,
        loading,
        createuser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;