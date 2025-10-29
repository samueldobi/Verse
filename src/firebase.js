import  { initializeApp }  from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  setPersistence, 
  browserLocalPersistence 
} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
};


const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);


export const register = async (email, username, password) => {
  try{
    // Stop firebase from logging out on reload 
    await setPersistence(auth, browserLocalPersistence); 
    const response = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(response.user, { displayName: username });
    return response.user;
  }catch(error){
    console.error("Error during registration:", error);
    throw error;
  }
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return auth.signOut();
};
export const resetPassword = ()=>{
  return sendPasswordResetEmail(auth,email)
}