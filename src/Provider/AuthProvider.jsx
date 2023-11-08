import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";
import axios from "axios";

  
 
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
                if(currentUser){
                    const loggedEmail={email: currentUser.email};
                    axios.post('https://assingment-11-three.vercel.app/jwt',loggedEmail,{ withCredentials:true})
                      .then(res=>{
                        console.log('token',res.data);
                      })
                }
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