import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB_HDK-CEtb-YEuUqFrapJqBBRYMu0YIac",
  authDomain: "prueba-tecnica-2-4a4e7.firebaseapp.com",
  projectId: "prueba-tecnica-2-4a4e7",
  storageBucket: "prueba-tecnica-2-4a4e7.appspot.com",
  messagingSenderId: "574875401239",
  appId: "1:574875401239:web:f81c1845ca5319b2717052",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
