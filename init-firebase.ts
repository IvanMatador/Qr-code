// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ59jlYGWTRfXfdpmEMOgRAXlA22pQvw0",
  authDomain: "qr-code-app-b112e.firebaseapp.com",
  projectId: "qr-code-app-b112e",
  storageBucket: "qr-code-app-b112e.appspot.com",
  messagingSenderId: "467513868521",
  appId: "1:467513868521:web:fbc9cfcca264a1dbe9f078",
  measurementId: "G-E9196MV2MK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
