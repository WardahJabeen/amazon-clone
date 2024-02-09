// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "clone-dadc1.firebaseapp.com",
    projectId: "clone-dadc1",
    storageBucket: "clone-dadc1.appspot.com",
    messagingSenderId: "61081881993",
    appId: "1:61081881993:web:1ef9f7c7c63cb51953a558",
    measurementId: "G-78EX7Y4HCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
export { app, auth, storage, db, provider };
export default db;