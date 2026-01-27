import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyutw2ScqFP1yzOkZb6sVI-Vw1aQ2Xk9A",
  authDomain: "auth-a16d9.firebaseapp.com",
  databaseURL:
    "https://auth-a16d9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auth-a16d9",
  storageBucket: "auth-a16d9.firebasestorage.app",
  messagingSenderId: "885419304107",
  appId: "1:885419304107:web:a3a051e3a0cbea058b83ee"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

