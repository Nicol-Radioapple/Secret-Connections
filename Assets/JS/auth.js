import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"
import {doc, setDoc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"


//Eventos


const signupForm =document.getElementById("form-signup");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    console.log(auth)
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
   
 console.log(email, password)
    try {
        const credentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = credentials.user;
        console.log(user.uid+" - "+email+"- "+password +"-"+name)

        const docu = doc(db, "usuarios", user.uid);
        await setDoc(docu, {
            email: email,
            password: password,
            name:name
           
        })

 console.log("halloween")
        //Selecionar modal
        signupForm.reset()
        const modalSignup = document.getElementById("exampleModal")
        //modalSignup.setAttribute("display", "none")
        //console.log(modalSignup)
        //const modal = bootstrap.Modal.getInstance(modalSignup);
        //console.log(modal)
        //modal.hide();
        console.log("creado!")

        location.href = "principal.html";




    } catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code)
        console.log("ERROR!!")
        // .. 

        //Terminos de error
        if (error.code === "auth/email-already-in-use") {
            alert("Usuario ya registrado")

        } else if (error.code === "auth/weak-password") {
            alert("Su contraseña debe tener 6 caracteres minimo")
        }
        else if (error.code === "auth/invalid-email") {
            alert("Error de escritura en el correo")
        }
        else if (error.code) {
            alert("Algo fue mal")
        }
    }
})


//Cunado se loguee el usuario
//async se coloca cuando no sabes cuando se va a responder 
onAuthStateChanged(auth, async (user) => {
 
if(!user){ //Si la sesion esta iniciada
   
}



});

//Formulario de Logueo

document.getElementById("form-signin").addEventListener("submit", async () => {

    const emailLogin = document.getElementById("email-signin").value;
    const passwordLogin = document.getElementById("password-signin").value;

    console.log()



    try {
        const credentials = await signInWithEmailAndPassword(auth, emailLogin, passwordLogin);
        console.log("Logueado")
        //Cerrar modal

        const modalSignin = document.getElementById("modal-signin")
        const modal = bootstrap.Modal.getInstace(modalSignin)
        modal.hide()
    }
    catch (error) {
        console.log(error.code)
    }

})

//Logueo con google

document.getElementById("google-boton").addEventListener("click", async (e) => {
    e.preventDefault()

    const provider = new GoogleAuthProvider(auth)




    try {
        const credentials = await signInWithPopup(auth, provider)

        //Ocultar el modal de signin
        const modalSignin = document.getElementById("modal-signin");
        const modal = bootstrap.Modal.getInstance(modalSignin);
        modal.hide()



    } catch (error) {
        console.log(error.code)
    }

})


