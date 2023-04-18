import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyANL12M4p0cccboFpZChqjBc3J8vOQ7sfM",
  authDomain: "ecommerce-4e598.firebaseapp.com",
  projectId: "ecommerce-4e598",
  storageBucket: "ecommerce-4e598.appspot.com",
  messagingSenderId: "1088121607309",
  appId: "1:1088121607309:web:adf25b50615c583e777ec4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage  = getStorage(app);

export default app;