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
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
            const res = await fetch(`/api/users/${user.uid}`);
            if (!res.ok) throw new Error("Failed to fetch DB user");

            const dbUser = await res.json();

            setCurrentUser({
            uid: user.uid,
            email: user.email,
            username: user.displayName,
            id: dbUser.id,
            });
        } catch (err) {
            console.error("❌ Failed to sync user with DB:", err);
            setCurrentUser({
            uid: user.uid,
            email: user.email,
            username: user.displayName,
            id: null,
            });
        }
        } else {
        setCurrentUser(null);
        }
    });

    return () => unsubscribe();
    }, []);
    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};