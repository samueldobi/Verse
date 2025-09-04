"use client";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState} from "react";
import { auth } from "@/firebase";
import {  AuthContextType, AuthUser } from "@/types/authTypes";




export const AuthContext = createContext<AuthContextType>({
    currentUser: null,
});
export const useAuth = ()=>{
    return useContext(AuthContext)
} 
export const AuthProvider = ({children}:{ children: React.ReactNode })=>{
    const [currentUser, setCurrentUser] =  useState<AuthUser | null>(null);
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setCurrentUser({
                    email:user.email,
                    username:user.displayName,
                })
            }else{
                setCurrentUser(null);
            }
        })
    },[])
    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};