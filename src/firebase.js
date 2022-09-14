import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsDuSQ218l7t9bpvGw_Ie5T4ss6iJBMLU",
  authDomain: "chat-app-37cdf.firebaseapp.com",
  projectId: "chat-app-37cdf",
  storageBucket: "chat-app-37cdf.appspot.com",
  messagingSenderId: "378319223906",
  appId: "1:378319223906:web:4cb7aaefdf7e1cc17ca53b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
