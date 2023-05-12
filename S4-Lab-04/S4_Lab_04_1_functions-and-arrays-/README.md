![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Funciones y Arrays en JS

<br/>

## Introducción

La manipulación de arrays en el código es una operación muy común. Ya sea que estés creando un total para un carrito de compras, tomando sólo los primeros nombres de una lista de personas, o moviendo una pieza en un tablero de ajedrez, probablemente vas a estar modificando o manipulando un array de alguna manera.

## Requisitos

- Haz un fork de este repo
- Clónalo en tu máquina

## La presentación

- Al terminar, ejecuta los siguientes comandos:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Crea un Pull Request para que tus TAs puedan comprobar tu trabajo.

<br/>

## Instrucciones

Trabajarás en el archivo `src/functions-and-arrays.js`, que ya está cargado en el archivo `index .html`.

Para ejecutar el código JavaScript abra el archivo `index.html` y utilice la extensión VSCode de [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Para ver la salida de su código JavaScript abra la [Consola en las Herramientas del Desarrollador](https://developer.chrome.com/docs/devtools/open/#console).

Mientras sigue las instrucciones para cada iteración, asegúrese de leer cuidadosamente las instrucciones para entender completamente los requerimientos de la tarea. No se apresure. Tómese su tiempo para leer cuidadosamente cada iteración.

### Nota sobre las pruebas

Este LAB, junto con algunos de los laboratorios en los que trabajará durante el bootcamp, está equipado con pruebas unitarias para proporcionar información automatizada sobre el progreso de su laboratorio.

**Una vez que haya completado las iteraciones básicas**, vaya a la sección **"Pruebe su código"** en la parte inferior. Allí se te pedirá que instales las dependencias de prueba y ejecutes las pruebas para comprobar cuántas pruebas pasa tu código.

<br/>

### Iteración #1: Encontrar el máximo

Implementa la función `maxOfTwoNumbers` que toma dos números como argumentos y devuelve el mayor.

<br/>

### Iteración nº 2: Encontrar la palabra más larga

Implementa la función `findLongestWord` que toma como argumento un array de palabras y devuelve la más larga. Si hay 2 con la misma longitud, debería devolver la primera ocurrencia.

Puede utilizar el siguiente array para probar su solución:

```javascript
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
```

<br/>

### Iteración #3: Calcular la suma

Calcular una suma puede ser tan sencillo como iterar sobre un array y sumar cada uno de los elementos.

Implementa la función llamada `sumNuumbers` que toma un array de números como argumento, y devuelve la suma de todos los números del array. Más adelante en el curso aprenderemos a hacer esto utilizando el método de `reduce` de arrays, lo que facilitará mucho el trabajo. Por ahora, vamos a practicar la forma _"declarativa"_ de sumar valores, utilizando bucles.

Puedes usar el siguiente array para probar tu solución:

```javascript
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
```

<br/>

#### Bono - Iteración #3.1: Una función genérica `sum()`

**El objetivo: Aprender a refactorizar tu código.** :muscle:

En la iteración 3, has creado una función que devuelve la suma de un array de números. Pero, ¿y si quisiéramos saber cuánto es la suma de la longitud de todas las palabras de un array? ¿Y si quisiéramos añadir valores _booleanos_ a la mezcla? No podríamos usar la misma función anterior, o mejor dicho, tendríamos que _retocarla_ un poco para que pueda ser reutilizada sin importar lo que haya en el array que se pasa como argumento cuando se llama a la función `sumNumbers()`.

Aquí estamos aplicando un concepto que llamamos **polimorfismo**, es decir, tratar la entrada de una función independientemente de los tipos que se le pasen.

Vamos a implementar la función `sum()` que calcula la suma para un array lleno de_(casi)_ cualquier tipo de datos. Tenga en cuenta que las cadenas deben tener su longitud añadida al total, y los valores booleanos deben ser coaccionados en sus correspondientes valores numéricos. Consulte las pruebas para obtener más detalles.

Puede utilizar la siguiente matriz para probar su solución:

```javascript
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 57
```

<br/>

### Iteración #4: Calcular la media

Calcular una media es una tarea muy común. Vamos a practicarla un poco.

**La lógica detrás de esto:**

1. Encuentra la suma como hicimos en el primer ejercicio (¿o qué tal si reutilizas el _sumNumbers()_?)
2. Toma esa suma y divídela entre el número de elementos de la lista.

<br/>

#### Nivel 1: Matriz de números

Implementa la función `averageNumbers` que espera un array de números y devuelve la media de los mismos:

Puedes usar el siguiente array para probar tu solución:

```javascript
const numbers = [2, 6, 9, 10, 7, 4, 1, 9];
```

<br/>

#### Nivel 2: Matriz de cadenas

Implementa la función llamada `averageWordLength` que recibe como único argumento una matriz de palabras y devuelve la longitud media de las mismas:

Puedes utilizar el siguiente array para probar tu solución:

```javascript
const words = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
```

<br/>

#### Bonus - Iteración #4.1: Una función genérica avg `()`

Cree la función `avg(arr)` que recibe cualquier matriz mixta y calcula el promedio. Considere como array mixto un array lleno de números y/o cadenas y/o booleanos. Seguimos una lógica similar a la aplicada en la iteración 4.1. del bono :wink:

```javascript
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 5.7
```

<br/>

### Iteración #5: Arreglos únicos

Tome el siguiente array, elimine los duplicados y devuelva un nuevo array. Es más que probable que quieras comprobar el método [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) Array.

Hazlo en forma de una función `uniquifyArray` que reciba un array de palabras como argumento.

Puede utilizar el siguiente array para probar su solución:

```javascript
const words = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];
```

<br/>

### Iteración #6: Buscar elementos

Vamos a crear una simple búsqueda en el array.

Declare una función llamada `doesWordExist` que recibirá un array de palabras como un argumento, y una palabra a buscar como el otro. Devuelve `true` si existe, en caso contrario, devuelve `false`. **No** utilice `indexOf` para esta función.

Puede utilizar el siguiente array para probar su solución:

```javascript
const words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
```

<br/>

### Iteración #7: Contar la repetición

Declare una función llamada `howManyTimes` que tomará un array de palabras como primer argumento, y una palabra a buscar como segundo argumento. La función devolverá el número de veces que esa palabra aparece en el array.

Puede utilizar la siguiente matriz para probar su solución:

```javascript
const words = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
```

<br/>

### Bono - Iteración #8: Producto de números adyacentes

¿Cuál es el mayor producto de cuatro números adyacentes? Consideramos adyacentes a cualquier cuatro números que estén próximos horizontal o verticalmente.

Por ejemplo, si tenemos una matriz de 5x5 como:

```bash
[ 1,  2, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1,  4, 3, 4, 5]
```

El mayor producto será el `20x20x20x4`= `32000`.

¡Declara una función llamada `greatestProduct(matrix)` para encontrarlo en la cuadrícula de 20×20 de abajo!

```javascript
const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
];
```

<br/>

### Bono - Iteración #8.1: Producto de diagonales

Siguiendo la lógica que has utilizado en la iteración #8, declara una función llamada `greatestProductOfDiagonals(matrix)`. Toma una matriz como parámetro y devuelve el mayor producto de cuatro valores cualesquiera dispuestos en diagonal, en cualquier dirección.

<br/>

## Pruebe su código

<br/>

### Pruebas automatizadas

Las pruebas automatizadas de software son el proceso de probar automáticamente una aplicación con el fin de verificar que cumple con los requisitos técnicos, y que se comporta como se espera.

Tener fuertes _suites de prueba_ puede proporcionarle tranquilidad, ya que será capaz de mejorar con confianza su trabajo, sabiendo que no está rompiendo una característica previamente desarrollada.

<br/>

### Pruebas con Jest

Jest es un ejecutor de pruebas automatizado para JavaScript.

Para ejecutar tus pruebas, abre tu terminal en el directorio raíz del laboratorio, ejecuta `npm install` para instalar tus dependencias y `npm run test:watch` para ejecutar las pruebas y generar el archivo `lab-solution.html`.

```shell
$ cd lab-js-functions-and-arrays-es
$ npm install
$ npm run test:watch
```

<br/>

En caso de que quieras comprobar las pruebas, están en el archivo `tests/functions-and-arrays.spec.js`.

Abra el archivo `lab-solution.html` utilizando la extensión VSCode de [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

<br/>

#### Pasar las pruebas

Al codificar con pruebas, es súper importante que leas cuidadosamente y entiendas los errores que estás obteniendo, de esta manera sabrás con seguridad lo que se espera de tu código.

Ten en cuenta que no necesitas **ejecutar las funciones tú mismo**, las pruebas se encargan de hacerlo. Todo lo que debes hacer es declararlas, asegurarte de que tratan los parámetros pasados y que devuelven lo que se indica en las iteraciones y en los mensajes de prueba. Para algunas iteraciones le proporcionamos un array de ejemplo, para que pueda hacer algunas pruebas **manuales**, si lo desea.

**Feliz codificación!** :heart: