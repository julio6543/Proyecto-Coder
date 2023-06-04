
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNzRDOk9sPvdYPY7s4Jrnn6pvr0vA69Gg",
  authDomain: "proyecto-coder-992b6.firebaseapp.com",
  projectId: "proyecto-coder-992b6",
  storageBucket: "proyecto-coder-992b6.appspot.com",
  messagingSenderId: "39693203093",
  appId: "1:39693203093:web:c5960693faad79d7924d9c",
  measurementId: "G-2S3L5D66CE"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
