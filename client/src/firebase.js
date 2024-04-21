// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSSqViydiarFdBg_vQh9NPD30ZfCo_D6o",
  authDomain: "podcast-8903d.firebaseapp.com",
  projectId: "podcast-8903d",
  storageBucket: "podcast-8903d.appspot.com",
  messagingSenderId: "262834828577",
  appId: "1:262834828577:web:cf6becd03ee7c69eec7a60",
  measurementId: "G-30RVQWJ4SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;