// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN3t7RQ-czSV6ie6v6bo2BBkS8tEJh0kY",
  authDomain: "ticket-kato.firebaseapp.com",
  projectId: "ticket-kato",
  storageBucket: "ticket-kato.appspot.com",
  messagingSenderId: "484910586679",
  appId: "1:484910586679:web:2e7f4c44bdfb03a855d8b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;