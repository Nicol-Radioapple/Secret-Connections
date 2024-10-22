

  // Importanmos las funciones que vamos a utilizar
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  //initializeApp: esta funcion es para poder en marcha la aplicación

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
  
//se configura firebase; con esto se esta conectando con la base de datos

  // Inicializar Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  //Inicializamos Autentificacion
  export  const auth = getAuth(app);