import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHWkj1ifNcyu4kVqrpZiMQC8lhmmpw_Ik",
  authDomain: "banco-3856a.firebaseapp.com",
  projectId: "banco-3856a",
  storageBucket: "banco-3856a.firebasestorage.app",
  messagingSenderId: "763701287991",
  appId: "1:763701287991:web:51336d1bc7128b25f273b2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};