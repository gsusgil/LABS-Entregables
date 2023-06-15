![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | #Promesa de cena

## Introducción

Debido a la naturaleza asíncrona de JavaScript, las promesas y los callbacks son muy importantes. Ambas nos permiten controlar el flujo de las operaciones y ejecutar tareas en secuencia.

<p align="center">

<img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-cover.png" alt="Lab Promise me dinner - final result" width="500"/>

</p>

## Requisitos

- Haz un fork de este repo
- Clona este repositorio

## La presentación

Al terminar, ejecuta los siguientes comandos:

```shell
$ git add .
$ git commit -m "done"
$ git push origin master
```

Cree una solicitud de extracción para que sus tutores puedan comprobar su trabajo.

## Instrucciones

### Iteración 0 | El código de inicio

Te proporcionamos un código de inicio:

- `javascript/data.js` - contiene cuatro arrays con los pasos para preparar 4 alimentos diferentes: _puré de patatas (mashed potatoes)_, _filete_ (steak), _coles de Bruselas_ (Brussel sprouts) y _brócoli_ (broccoli).

- `javascript/getInstruction.` js - contiene una función **`getInstruction`** que **utiliza callbacks** para recuperar asincrónicamente los pasos de las instrucciones para cualquier comida. Utiliza `setTimeout` para imitar una operación asíncrona.

  ```js
  getInstruction(food, step, callback, errorCallback)
  ```

  :exclamation: **No debes hacer ningún cambio en este archivo.**

- `javascript/obtainInstruction.js` - tiene una función **`obtainInstruction`** que **utiliza promesas** para recuperar asincrónicamente los pasos de la instrucción para cualquier alimento. También utiliza `setTimeout` para imitar una operación asíncrona.

  ```js
  obtainInstruction(food, step)
  ```

  :exclamation: **Tampoco deberías hacer ningún cambio en este archivo.**

- `javascript/index.js` - en este archivo dejamos un ejemplo para mostrarte cómo debería ejecutarse el código. Sin embargo, el código proporcionado _aún_ no utiliza callbacks anidados o promesas, por lo que los pasos no se imprimirán en el orden correcto. Tu tarea en la primera iteración será hacer esto correctamente, pero más adelante hablaremos de ello.

- `index.html` - contiene una estructura HTML base necesaria, por lo que no es necesario añadir ningún código allí. Los archivos JavaScript mencionados anteriormente ya están vinculados al `index.html`. El `data.js` se carga primero para asegurarse de que las matrices que contienen instrucciones ya están cargadas y pueden ser utilizadas en otros archivos, donde las necesitamos.  
  :exclamation: **No debes hacer ningún cambio en este archivo.**

### Fuera de sincronización

**Debes escribir tu código _sólo_ en el archivo `javascript/index.js`**.

Ahora, abre el archivo y echa un vistazo al código de inicio proporcionado allí. El código proporcionado no utiliza callbacks anidados para imponer una secuencia de ejecución, por lo que los pasos no se muestran en el orden correcto.

Abra la página `index.html` en el navegador. Observe cómo los pasos de cocción se muestran fuera de orden.

<details>
  <summary><b>Captura de pantalla</b></summary>

![Steps out of sync](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-out-of-sync.gif)

</details>

:exclamation: Antes de empezar a trabajar en la Iteración 1, comenta el código inicial en `javascript/index.js`.

<br/>

## Iteración 1 | Hacer el puré de patatas con callbacks

Utilizando callbacks anidados imprime los pasos de cocción para hacer el puré de patatas en el orden correcto. Escriba su JavaScript en el archivo `javascript/index.js` proporcionado. Una vez más, un recordatorio de no alterar el archivo `getInstruction.js`.

```javascript
// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
    // ...
});
```

Después del último paso, debe mostrar un adicional `<li>` con el texto: `Mashed potatoes are ready!`

<details>
  <summary><b>Resultado esperado</b></summary>

![Iteration 1 expected result](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-1-result.gif)

</details>

## Iteración 2 | Hacer la estaca con promesas

Utilizando promesas y la sentencia `then()` imprime las instrucciones para mostrar la instrucción de cocción de la Estaca en el orden correcto. Esta vez, tendrás que llamar a la función `obtainInstruction` que devuelve una Promesa pendiente.

Sigue trabajando en el `javascript/index.js`. No debes alterar el archivo `obtainInstruction.js`.

```javascript
// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    //  ... Your code here
  })
  // ... Your code here
```

Después del último paso, debes mostrar un adicional `<li>` con el texto: `Steak is ready!`.

<details>
  <summary><b>Resultado esperado</b></summary>

![Iteration 2 expected result](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-2-result.gif)

</details>

## Iteración 3 | Hacer el brócoli con async/await

Usando promesas con la sintaxis `async` y `await` imprime las instrucciones para hacer las Coles de Bruselas en el orden correcto. Necesitarás la función `obtainInstruction` que devuelve una Promesa pendiente.

```javascript
async function makeBroccoli() {
  // ... Your code here
}
```

Después del último paso, deberías mostrar un adicional `<li>` con el texto: `Broccoli is ready!`.

<details>
  <summary><b>Resultado esperado</b></summary>

![Iteration 3 expected result](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-3-result.gif)

</details>

## Bono 1

Cuando la comida específica esté lista para ser servida (todos los pasos están listados), elimina el atributo `hidden` del elemento `<img />` que representa la comida, para que se muestre la imagen.

<details>
  <summary><b>Resultado esperado</b></summary>

![Bonus Iteration 1 expected result](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-bonus-1-result.gif)

</details>

## Bono 2

Utilizando `Promise.all` muestre los pasos de cocción para hacer Coles de Bruselas en el orden correcto.

Después del último paso, debería mostrar un adicional `<li>` con el texto:  `Brussels sprouts are ready!`.

**El resultado final debería ser así - con todos los pasos de cocción mostrados en el orden** correcto:

![Bonus Iteration 2 expected result](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-promise-me-dinner-bonus-2-result.gif)

<br/>

**¡Feliz codificación!** :blue_heart: