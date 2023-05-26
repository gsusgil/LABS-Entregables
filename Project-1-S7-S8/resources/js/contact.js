/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

// 1era ITERACION  Primero se crean todas las variables con los sselectores correctos ya identificados en el html
const myForm = document.querySelector("#myForm");
const fullNameInput = document.querySelector("#formName");
const emailInput = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone");
const randomMessage = document.querySelector("#msg");

const errorPage=() => {
    const error = document.querySelector(".container");
    error.innerHTML = `
    <h1>Error 404 - Pagina no encontrada</h1>`
}
let sendData = (event) => {
  event.preventDefault();

  // 2da ITERACION  Se coloca un IF para verificar que todos los campos esten rellenos correctamente, caso contrario avisa a user que tiene que verificar y rellenar todo correctamente
  if (!fullNameInput.value || !emailInput.value || !phoneNumber.value) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  console.log("Enviando datos al servidor...");

  // 3era ITERACION  Se utiliza setTimeout para agregar un delay de 2 seg para emular la llamada a un servidor.
  setTimeout(() => {
    const aleatorio = Math.random()
    if (aleatorio <0.5) {
      console.log("La solicitud se ha enviado correctamente.");
      alert("La solicitud se ha enviado correctamente.");
      fullNameInput.value = '';
      emailInput.value = '';
      phoneNumber.value = '';
      randomMessage.value = '';
    } else {
      console.log("No se pudo enviar la solicitud.");
      errorPage();
    }
  }, 2000); 
};
myForm.addEventListener("submit", sendData);
