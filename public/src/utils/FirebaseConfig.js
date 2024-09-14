import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBRair_V8Dt4wuBYMmdllzXHLiZkDTFbH4",
    authDomain: "chat-app-b7aee.firebaseapp.com",
    projectId: "chat-app-b7aee",
    storageBucket: "chat-app-b7aee.appspot.com",
    messagingSenderId: "767751435308",
    appId: "1:767751435308:web:9b07b89098ad672ce08d89",
    measurementId: "G-18Q7GVV29X"
    
  };
  const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
