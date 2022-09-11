// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2_rPmYTOz-XGcH9cq-0kapoYSRkl-Aew",
  authDomain: "user-login-auth-30d35.firebaseapp.com",
  projectId: "user-login-auth-30d35",
  storageBucket: "user-login-auth-30d35.appspot.com",
  messagingSenderId: "10296838904",
  appId: "1:10296838904:web:f42f52d30a008dcf22090d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
