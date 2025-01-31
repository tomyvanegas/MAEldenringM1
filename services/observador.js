import {getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    let usuario= document.getElementById("usuario")
    usuario.textContent="bienvenido "+user.email
    let salir = document.getElementById("salir")
    salir.classList.remove("invisible")
    let tienda = document.getElementById("tienda")
    tienda.classList.remove("invisible")
    let musica = document.getElementById("musica")
    musica.classList.remove("invisible")
    // ...
  } else {
    // User is signed out
    // ...
    let usuario= document.getElementById("usuario")
    usuario.textContent=""
  }
});
let botonsalir = document.getElementById('salir')

botonsalir.addEventListener("click", function () {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href="../index.html"
  }).catch((error) => {
    // An error happened.
  });

})