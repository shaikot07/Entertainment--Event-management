import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from 'react-hot-toast';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
      const [user,setUser]=useState(null)
      const [loading,setLoading]= useState(true)
     

      const createUser = (email,password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
      }

      const logIn = (email,password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }
      const logOut = ()=>{
            setLoading(true)
            return signOut(auth)
      }

    
      useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth,currentUser =>{
                  // console.log(currentUser);
                  setUser(currentUser)
            })
            return ()=>{
                  setLoading(false)
                  unSubscribe()
            }
      },[])

      const authDeliveryInfo={
            createUser,
            logIn,
            logOut,
            user,
           
      }
      return (
            <AuthContext.Provider value={authDeliveryInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;