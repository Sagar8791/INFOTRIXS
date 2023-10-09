
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCSz2ofwHGUoRV9H3LF0s26XheaA0O8rBM",
  authDomain: "chat-2cc8e.firebaseapp.com",
  projectId: "chat-2cc8e",
  storageBucket: "chat-2cc8e.appspot.com",
  messagingSenderId: "466876005855",
  appId: "1:466876005855:web:47764d9f54a4908fcf186a"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()