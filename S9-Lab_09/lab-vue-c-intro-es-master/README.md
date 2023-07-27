![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Hola Vue

## Introducción

Hoy, hemos aprendido los conceptos básicos de Vue.js y cómo crear una aplicación simple utilizando el paquete `npm init vue@latest`. En este ejercicio, hemos practicado lo que acabamos de aprender creando una página de inicio simple (con suerte, con algunos estilos :blossom:).

## Requisitos

- Haz un fork de este repo
- Clona este repositorio
- Abre el LAB y comienza:

  ```bash
  $ cd lab-vue-c-intro-es
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

## Instrucciones

### Iteración 1 | Crear aplicación Vue

¡Empecemos esta fiesta! En primer lugar, tendrás que crear una nueva aplicación Vue.

Navega hasta la carpeta raíz del LAB. Cuando estés en la carpeta raíz, usa `npm init vue@latest` en la línea de comandos para crear un nuevo proyecto Vue.

Una vez que hayas creado la aplicación, navega hasta la carpeta raíz de la aplicación. Desde aquí, ejecuta la aplicación en modo de desarrollo y ábrela en el navegador.

Si necesitas ayuda, recuerda que siempre puedes consultar la documentación oficial de Vue. Echa un vistazo a la página de Introducción aquí: [Crear aplicación Vue - Introducción](https://vuejs.org/guide/quick-start.html).

### Iteración 2 | Preparar la aplicación

Ahora que has creado la aplicación, vamos a limpiar el archivo `App.Vue`. Elimina el contenido inicial generado por la CRA para obtener la siguiente estructura:

```jsx
<template>
  <div id="app">
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  #app {
  }
</style>
```

<br>

### Iteración 3 | Descarga los activos

Para crear la página de aterrizaje necesitaremos algunas imágenes. Dentro de la carpeta `src/` crea una nueva carpeta llamada `images`. La carpeta debe estar anidada de la siguiente manera `src/images/`.

A continuación, descarga las siguientes imágenes y guárdalas en la carpeta `src/images/`.

Puedes obtener todas las imágenes desde [este archivo de Figma](https://www.figma.com/file/2rSKMls9ZscT4VjggWpvfL/Vue-Lab---Welcome-to-Vue.js?node-id=0%3A1). Figma es una herramienta gratuita de prototipado y diseño muy popular entre los diseñadores. Como desarrollador web, es probable que tengas que replicar diseños construidos en Figma con frecuencia. Usar Figma es útil porque puedes ver exactamente cuál es el tamaño y la posición de las cosas, en lugar de simplemente ver un archivo de imagen.

<br>

### Iteración 4 | Página de Inicio

Finalmente, crearemos nuestra página de inicio. Utilizando los recursos que descargaste de Figma en la iteración anterior, recrea la siguiente página de inicio:

<details>
  <summary>Haz clic aquí para ver la imagen</summary>

![web-frontend-vue/lab-vue-intro-finished](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-frontend-vue/lab-vue-intro-finished.png)

</details>

Por ahora, no te preocupes por crear más de un componente, ¡lo abordaremos en las siguientes lecciones!

<br>

Happy coding! :heart:
