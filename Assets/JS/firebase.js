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
   apiKey: "AIzaSyASOusy6RQT6I1uvasVBfIzouD8XK13rAM",
   authDomain: "secret-link-04.firebaseapp.com",
   projectId: "secret-link-04",
   storageBucket: "secret-link-04.appspot.com",
   messagingSenderId: "1010035548216",
   appId: "1:1010035548216:web:31ced0e6ebd056b2e706cd",
   measurementId: "G-8W3JN8L6SK"
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