// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUFZDrQ8UA0fzt9d0ileJRCapRVvAMQmY",
    authDomain: "mas-toys-center.firebaseapp.com",
    projectId: "mas-toys-center",
    storageBucket: "mas-toys-center.appspot.com",
    messagingSenderId: "626030289395",
    appId: "1:626030289395:web:682b2ba865fbcbcb907286"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;