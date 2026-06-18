import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsnv0iLsQdQrodfoAEKJrda5-Mjjkx6Cs",
  authDomain: "bkbuildersland.firebaseapp.com",
  projectId: "bkbuildersland",
  storageBucket: "bkbuildersland.firebasestorage.app",
  messagingSenderId: "415043518151",
  appId: "1:415043518151:web:da3cfe8843dd87686f88e2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);