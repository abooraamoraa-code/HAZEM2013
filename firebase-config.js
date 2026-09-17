// استيراد مكتبات فايربيس عبر الـ CDN للعمل المباشر في المتصفح
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

// معلومات مشروعك الحقيقية التي أرسلتها
const firebaseConfig = {
  apiKey: "AIzaSyD1Eqs7h65dMPh5YVmky_9WoPt7HSpeSUs",
  authDomain: "joml-platform.firebaseapp.com",
  projectId: "joml-platform",
  storageBucket: "joml-platform.firebasestorage.app",
  messagingSenderId: "990060272028",
  appId: "1:990060272028:web:0016028bb6b8b873cf1059",
  measurementId: "G-67GYD2YV2S"
};

// تهيئة فايربيس
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);