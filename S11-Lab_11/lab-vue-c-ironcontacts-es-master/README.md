![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Vue.js IronContacts (Composition API)

## Introducción

Después de Ironhack, has decidido trabajar en la industria cinematográfica, y has encontrado un trabajo en el que necesitas gestionar los contactos de un famoso productor.

Tu tarea es crear una aplicación de gestión de contactos para el productor utilizando Vue.js.

## Setup

- Haz un fork de este repo
- Clona este repositorio
- Abre el LAB y comienza:

  ```bash
  $ cd lab-vue-c-ironcontacts-es
  $ npm install
  $ npm run dev
  ```

## La presentación

Al terminar, ejecuta los siguientes comandos:

```shell
$ git add .
$ git commit -m "done"
$ git push origin master
```

Cree una solicitud de extracción para que sus tutores puedan comprobar su trabajo.

## Empezando

Limpia el componente `App.vue` para que tenga la siguiente estructura dentro de las etiquetas de plantilla

```js
// src/App.vue
<template>
</template>

<script setup>
</script>

<style>
</style>

```

## Instrucciones

### Iteración 1 | Mostrar 5 contactos

Echemos un vistazo al código inicial.

Dentro de la carpeta `src` tenemos un archivo `contacts.json` que contiene los contactos del productor. Importa el archivo `contacts.json` en `App.vue`. Una vez hecho esto, crea una variable ref llamada `contacts` que almacena **una matriz que contiene los primeros 5 contactos**.

Muestra esa matriz de 5 contactos como una lista en una etiqueta `<table>` y muestra la foto (`picture`), el nombre (`name`) y la popularidad (`popularity`) de cada contacto.

Por ahora, vamos a mostrar el contenido en `App.vue`. Dicho esto, no procedas a crear un componente dedicado para la lista de contactos. Por ahora, solo mostraremos todo en un componente.

Sigamos adelante.

Para importar `contacts.json` en `App.vue`, puedes usar:

```js
import contacts from "./contacts.json";
```

Al final de esta iteración, tu aplicación debería verse así:

<details>
  <summary> Ver imagen dentro - Iteración 1</summary>

![Screenshot - Iteration 1](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-ironcontacts-1.png)

</details>

### Iteración 2 | Mostrar Condicionalmente la Información de Premios

El productor desea ver la información sobre los *premios* que el contacto ha ganado.

Actualice la lista y agregue dos columnas más "Ganó un Oscar" ("Won an Oscar") y "Ganó un Emmy" ("Won an Emmy"), al final de la tabla. Luego, dependiendo del valor `wonOscar` y `wonEmmy` de cada contacto, renderice condicionalmente un ícono de trofeo :trophy: o ningún contenido.

Una vez hecho esto, su aplicación debería verse así:

<details>

<summary> Ver imagen dentro - Iteración 2</summary>

![Screenshot - Iteration 2](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-ironcontacts-2.png)

</details>

### Iteración 3 | Añadir nuevos contactos aleatorios

En tu aplicación, crea un botón *Añadir contacto aleatorio* (*Add Random Contact*). Cada vez que hagas clic en este botón, se debe añadir un nuevo contacto aleatorio a los `contacts`. Deberías obtener contactos aleatorios de los contactos que todavía no se están mostrando.

Primero, selecciona aleatoriamente un contacto del array de contactos restantes. Luego, añade ese contacto al array que se encuentra en tu referencia de datos (que es el array previamente creado de 5 contactos).

Al final de esta iteración, tu sitio web probablemente se verá así:

<details>
  <summary> Ver imagen dentro - Iteración 3 </summary>

![Screenshot - Iteration 3](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-ironcontacts-3.png)

</details>

### Iteración 4 | Ordenar Contactos por Nombre y Popularidad

El productor te pidió que agregues dos nuevos botones para ayudarles a ordenar sus contactos. Cuando hagas clic en uno de los botones, debería **ordenar la tabla por nombre (`name`)** (alfabéticamente), y cuando hagas clic en el otro, debería **ordenar por popularidad (`popularity`)** (el más alto primero).

Una vez que hayas ordenado el array, recuerda actualizar la variable ref que contiene los contactos.

Esto es lo que deberías tener al final de esta iteración:

<details>
  <summary> Ver imagen dentro - Iteración 4 </summary>

![Screenshot - Iteration 4](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-ironcontacts-4.png)

</details>

### Iteración 5 | Eliminar contactos

El productor también desea eliminar algunos de sus contactos. Implemente un botón *Eliminar* (*Delete*) en cada fila de su `<table>` que permita al usuario eliminar el contacto que haya hecho clic.

Cuando hagan clic, debe obtener el `id` de ese actor y utilizarlo para eliminar el contacto del array. ¡Recuerde actualizar la variable de referencia que contiene los contactos después de eliminar el contacto!

Cuando termine, su aplicación debería verse así (después de jugar un poco con el botón *Eliminar* (*Delete*)):

<details>
  <summary> Ver imagen dentro - Iteración 5 </summary>

![Screenshot - Iteration 5](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-ironcontacts-5.png)

</details>

### Iteración 6 | Bonus | Estilo

Desafortunadamente, esta lista de contactos no está lista para producción. ¡Estamos en el negocio del cine! ¡Tiene que brillar! Agrega algo de hermoso CSS para hacer que la aplicación "resalte".

<br>

Happy coding! :blue_heart:
