 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
 import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyDYK4FmRxMYNQRY6unRXLu4DyYWusN98J4",
  authDomain: "secrets-links.firebaseapp.com",
  projectId: "secrets-links",
  storageBucket: "secrets-links.appspot.com",
  messagingSenderId: "935721336750",
  appId: "1:935721336750:web:e5633814d693236c95523f",
  measurementId: "G-ZKHW1179YX"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);


 //Inicializamos auth
export const auth = getAuth(app);

//Inicializamos el firestore

export const db = getFirestore(app)

//Inicializamos Storage

export const storage =getStorage(app)
