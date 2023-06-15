// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// PASO 1 se crea la funcion tipo flecha de getInsgtruction para seleccionar mediante el queryselector (id) el objeto donde se va a iterar. se utiliza el metodo InnerHTML para insertarlo en el HTML y con los template literals se inserta en modo de list.
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
//En este ejercicio se coloca funcion dentro de funcion para practicar la anidacion y asi porder demostrar que se comienza una funcion cuando la otra ya esya terminada.
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;

        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;

          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document
            .querySelector("#mashedPotatoesImg")
            .removeAttribute("hidden");
        });
      });
    });
  });
});


// // Iteration 2 - using promises

//Usando el .then para encadenar funciones (promesas) se coloca en el parametro (resolve, reject) para ver el estado y resultado de la promesa. al final va un catch que funciona para manejar el rechazo si lo hubiese.
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
      document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");
  })

  .catch((error) => console.log(error));


// // Iteration 3 - using Async/await

//Utilizamos la forma de try para que va dentro de una funcion async para colocar cada una de las promesas que se deben cumplir.

  async function printInstructions() {
    try {

      //se hace una variable con await esperando que devuelva la promsa resuelta y seguir con los siguientes pasos. Asi sucesivamente con todos los pasos 
      const step0 = await obtainInstruction('broccoli', 0);
      document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
  
      const step1 = await obtainInstruction('broccoli', 1);
      document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  
      const step2 = await obtainInstruction('broccoli', 2);
      document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  
      const step3 = await obtainInstruction('broccoli', 3);
      document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
  
      const step4 = await obtainInstruction('broccoli', 4);
      document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  
      document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
  
      document.querySelector("#broccoliImg").removeAttribute("hidden");

      //se utiliza el catch para manejar el error.
      
    } catch (error) {
      console.error(error);
    }
  }
  //--------RECORDAR LLAMAR SIEMPRE A LA FUNCION ----------
  printInstructions();




