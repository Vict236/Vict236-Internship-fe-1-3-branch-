import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDkXUXcLgJy4Kr_8xs7FpXT1I1Sui9PUuo",
    authDomain: "internship-3-b7254.firebaseapp.com",
    databaseURL: "https://internship-3-b7254-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "internship-3-b7254",
    storageBucket: "internship-3-b7254.appspot.com",
    messagingSenderId: "356365967125",
    appId: "1:356365967125:web:e872550c53fa23aa44531c"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
