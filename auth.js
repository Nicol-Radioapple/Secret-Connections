import { auth } from "./firebase.js";

import{createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js"

import{onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js"

import{signOut} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js"

import{signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js"


//Evento
document.getElementById("form-singup").addEventListener("submit", (e) =>{
e.preventDefault()

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

//Envia los datos a firebase

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
  //Selector Modal
    const modaleSignup= document.getElementById("modal-signip")
    const modal= bootstrap.Modal.getInstance(modaleSignup)

    console.log("creado")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.code)
    console.log("eror")

    // tratamiento de errores
    if(error.code === "auth/email-already-in-use"){
      alert("Usuario ya registrado")
    }
    else if(error.code === "auth/weak-password"){
      alert("su contraseña debe tener 6 caracteres minimo")
    }
    else if(error.code ==="auth/invalid-email"){
      alert("error de escritura en el correo")
    }
});
})

//Cuando se loguee el usuario
//Cada vex que ocurre un cambio de sesion, se ejecuta onAuthStateChanged
onAuthStateChanged(auth, async(user)=> {
  const outlinks= document.querySelectorAll(".logged-out")
  const inlinks= document.querySelectorAll(".logged-in")
  console.log("hola")
  console.log(outlinks)
  console.log(inlinks)

  if(user){ //si la sesion esta iniciada
    outlinks.forEach(link=> link.style.display= "none");
    inlinks.forEach(link=> link.style.display= "block");
  }else{  //si no esta iniciada
    outlinks.forEach(link=> link.style.display= "block");
    inlinks.forEach(link=> link.style.display= "none");
  }
})

//Deslogado

document.getElementById("logout").addEventListener("click", ()=>{
  signOut(auth);
  console.log("usuario cerro sesion")
})

//Formulario de Logeo

document.getElementById("form-sign-in").addEventListener("submit", async(e)=>{
  e.preventDefault();
  const emailLogin= document.getElementById("email-sign-in").value
  const passwordLogin= document.getElementById("password-sign-in").value

  console.log("logueado")

  try {
    const creadentials = await signInWithEmailAndPassword(auth,emailLogin, passwordLogin);
    console.log("logueado")
    //Cerrar modal
    const modaleSignip= document.getElementById("Modal-sign-in")
    modal.hide();
  }
  catch(error){
    console.log(error.code)
  }
})  