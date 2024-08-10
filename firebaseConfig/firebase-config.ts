// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth,browserLocalPersistence } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { getVertexAI, getGenerativeModel } from "firebase/vertexai-preview";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBbOLOKrLc0mIBk25xpbFwQdytTvihVXM",
  authDomain: "chatbot-test-425613.firebaseapp.com",
  projectId: "chatbot-test-425613",
  storageBucket: "chatbot-test-425613.appspot.com",
  messagingSenderId: "814121034953",
  appId: "1:814121034953:web:f73d7e2e4d5e9d13895918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const vertexAI = getVertexAI(app);
export const auth = initializeAuth(app,{ persistence: browserLocalPersistence});
const db = getFirestore(app)
const storage = getStorage(app);
const functions = getFunctions(app);
//connectFunctionsEmulator(functions, "127.0.0.1", 5001);
export {db , storage,functions,vertexAI}

export default app 