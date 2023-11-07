import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";

  
 
 export const AuthContext =createContext();
 const provider = new GoogleAuthProvider();

const AuthProvider = ({children} ) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

        const singIn = (email,password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
        }

        const logOut= ()=>{
            setLoading(true);
            return signOut(auth)
        }
        const googleSingIn =()=>{
            return signInWithPopup(auth, provider);
        }

        useEffect (()=>{
            const unsubscribe = onAuthStateChanged(auth,currentUser =>{
                setUser(currentUser);
                console.log('user hoyse',currentUser);
                setLoading(false);
            })
            return ()=>{
                return unsubscribe();
            }
        },[])
    const Info ={
        user,
        loading,
        createUser,
        singIn,
        logOut,
        googleSingIn
    }
    return (
        <AuthContext.Provider value={Info}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;