// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqG6ztzcxGKSB8Op3E-nhzfl9CgXOrlro",
    authDomain: "yjs-editor.firebaseapp.com",
    projectId: "yjs-editor",
    storageBucket: "yjs-editor.appspot.com",
    messagingSenderId: "459953287631",
    appId: "1:459953287631:web:d988dd69db540bed08a2ba",
    measurementId: "G-Z0P2MKNDR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);