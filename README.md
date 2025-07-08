# Cypress V14.4.0 -Docker + Cucumber + Jenkins -JUNE'25 Course

## Cypress-14-Docker-Cucumber-Jenkins-JUNE25

[![Curso reciente ](images/2025-07-02_141637.png "Crea y Despliega un Sistema de Ventas FULL STACK con REACT y PostgreSQL | 2025")](https://www.udemy.com/course/cypress-ultimate-course/)

>[!IMPORTANT]
>
>* What you'll learn
>   * By end of this course, you will be a master in 2024 Cypress with latest version.
>   * You will be able to build robust framework using Cypress >+ Docker + Cucumber + Jenkins.
>   * Complete knowledge on how to write test in Cucumber BDD style.
>   * Complete knowledge on Docker and how to run tests inside docker.
>   * Complete understanding of Cypress Components such as fixtures, plugins, screenshots and videos.
>   * Usage of Cypress in real world automation end to end testing.
>   * Gain complete knowledge on Web Automation techniques and tricks.
>   * Practical knowledge in designing framework from scratch.
>   * Learn API testing using Cypress.
>   * Learn how to use Mocks for seamless web automation.

## Section 1: Introduction to Cypress

### 5. What is Cypress ?

>[!NOTE]
>
>`Cypress` is a next generation front end automation testing tool built for the modern web applications. Using `Cypress`. We can do fast, easy and reliable testing for anything that runs in a browser.
>
>To understand more about the `Cypress`, let's go to their official website. `Cypress`.Dot io is their official website.The slogan they have written is test, automate, accelerate.
>
>With `Cypress`, you can easily create tests for your modern web applications, debug them visually and automatically run them in your continuous integration bill. As you all are aware that the website is, keep on evolving like from Angular to React and many other assets.
>
>**What is asynchronous issue?**
>
>Let's say when we click on a button in a web page and it navigates to the other page, and it takes
>nearly five to 10s to navigate.
>
>If we use other automation tools, then we have to deliberately ad wait until the next page loads.But with `Cypress` we do not need to handle any wait. `Cypress` engine handles that for us.
>
>This is one of the major features which is `Cypress` offers when compared to other tools. As often the test script may fail because of this synchronization bonding. By default `Cypress` will wait for four seconds, but we can configure that globally and can increase the wait based upon the website we work on.
>
>We will cover this in detail in the upcoming session.`Cypress` scripts are written in JavaScript. This is because `Cypress` is built on NodeJS.
>
>**`Cypress` uses mocha and chai.**
>
>Mocha is a feature rich JavaScript test framework running on the NodeJS and in the browser, makingasynchronous testing simple and fun.
>
>Mocha tests run serially, allowing for flexible and accurate reporting while mapping uncaught exceptions to the correct test cases.
>
>Chai is a BDD or TDD assertion library for node and the browser that can be delightfully paired with any JavaScript testing framework.

### 6. Cypress Architecture

>[!NOTE]
>
>Antes de empezar con la arquitectura de `Cypress`, echemos un vistazo a la arquitectura de `Selenium`.
>Para las personas que no tienen ni idea sobre el `Selenium`.
>
>`Selenium` es la herramienta dominantemente utilizada para pruebas de automatización web en todo el mundo. Esta es la arquitectura del `Selenium`. Una vez que escribimos nuestro código en `Selenium`, compila y envía. Tiene una petición Http a un medio llamado como controlador del navegador.
>
>Si las personas que ya tienen una idea con `Selenium`, cada prueba tiene que mencionar lo que el controlador del navegador se ejecuta esta prueba.
>
>Veamos ahora la arquitectura de `Cypress`.
>
>Como puede ver en el diagrama, nuestra prueba de `Cypress` ejecuta comandos directamente en el navegador. En comparación con el selenio, `Cypress` no tiene ninguna sección de conductor intermedio.
>
>Gracias a ello, las pruebas de `Cypress` son superrápidas y mucho más fiables en comparación con otras herramientas de automatización. En resumen, `Cypress` es mucho más diferente y eficaz que las herramientas de automatización existentes.

### 7. Amazing Cypress Features

>[!NOTE]
>`Cypress` ofrece algunas características sorprendentes en comparación con otras herramientas de automatización como `Selenium`, `PlayWright`, WebDriver, IO, etc. Veámoslos uno por uno.
>
>**La primera característica es el viaje en el tiempo.**
>
>`Cypress` toma instantáneas mientras se ejecuta la prueba, lo que permite al usuario volver atrás y verificar una vez finalizada la ejecución para ver exactamente lo que ocurrió en cada paso.
>
>Esta característica es la más sorprendente característica que no está presente en cualquier otra herramienta de automatización. Lo veremos en detalle en nuestro próximo vídeo.
>
>**La siguiente característica es la recarga en tiempo real.**
>
>`Cypress` se recarga automáticamente cada vez que realizamos cambios en la prueba. Ya no es necesario ejecutar una prueba cada vez después de guardar un archivo. `Cypress` lo hace automáticamente.
>
>**La siguiente característica es spice stubs y relojes erificar y controlar el comportamiento de las funciones, las respuestas del servidor, o temporizadores.**
>
>Por ejemplo, digamos que estás probando una aplicación que lanza un error. Si abrimos con las fechas pasadas, a continuación, utilizando `Cypress`, podemos burlarse de los temporizadores como el punto fechas pasadas y comprobar las respuestas web.
>
>**La siguiente característica es la coherencia de los resultados.**
>
>Las pruebas de `Cypress` no tienen escamas.En todo momento, el resultado de la prueba será preciso gracias a su potente arquitectura, que consiste en que la prueba se ejecuta directamente en el navegador.
>
>**La siguiente característica es la capacidad de depuración de errores legibles y rastros de pila hace que la depuración sea tan fácil en `Cypress`.**
>
>Si la prueba falla con los errores mostrados en Test Runner y la función de viaje en el tiempo, podemos agarrar fácilmente los errores.
>
>Se acabaron las conjeturas para identificar los errores cuando trabajamos en `Cypress`.
>
>**La siguiente función es la ponderación automática.**
>
>Como se ha comentado anteriormente, `Cypress` ofrece por defecto la ponderación automática en los comandos y asercionesantes de seguir adelante, de modo que no es necesario poner peso o dormir deliberadamente en la prueba.
>
>**La siguiente función es el control del tráfico de red.**
>
>EC controla los y casos de prueba sin involucrar al servidor. Podemos simular fácilmente las respuestas del servidor para probar los casos extremos utilizando `Cypress`.
>
>**La siguiente función son las capturas de pantalla y los vídeos.**
>
>Esta es otra de las grandes características que ofrece `Cypress`. Las capturas de pantalla se toman automáticamente en caso de fallo y el vídeo de toda la prueba se graba y almacena automáticamente. Si desea obtener capturas de pantalla de vídeos utilizando selenio, tenemos que escribir código independiente e invocarlo en la prueba. Pero con las ofertas de `Cypress` como función incorporada.
>
>Así que hemos entendido claramente cuáles son las grandes características que ofrece el `Cypress` en comparación con las otras herramientas.

## Section 2: JavaScript Basics

### 8. Introduction to JavaScript

>[!NOTE]
>
>Entenderemos un poco de historia sobre el JavaScript.
>
>JavaScript fue creado por Brendan en 1995 mientras trabajaba en Netscape Communications Corporation.
>El JavaScript se denominaba originalmente Livescript.
>Más tarde se renombró como JavaScript para alinearse con la popularidad de otro lenguaje llamado Java.
>Aunque Java y JavaScript son muy diferentes entre sí.
>JavaScript se ganó rápidamente la atracción, ya que se proporciona una forma de añadir interactividad a las páginas web
>estáticas.
>
>**La primera característica es dinámica e interpretada.**
>
>JavaScript es un lenguaje de tipado dinámico, lo que significa que las variables pueden cambiar de tipo durante el tiempo de ejecución.
>También es un lenguaje interpretado, lo que significa que el código JavaScript es ejecutado directamente por un navegador
>web sin necesidad de compilación.
>
>Así que debido a que esto hace que el altamente accesible para los desarrolladores web, ya que pueden escribir y probar el código
>en tiempo real.
>
>**La segunda característica es el scripting del lado del cliente.**
>
>Uno de los principales usos de JavaScript es la creación de scripts en el lado del cliente.
>Se ejecuta en el navegador web del usuario, lo que permite a los desarrolladores crear aplicaciones web interactivas.
>Con JavaScript, puede manipular el Dom, que es el modelo de objetos del documento.
>Responder a los eventos del usuario, validar a partir de la entrada y realizar diversas acciones sin requerir un viaje de ida y vuelta del servidor.
>
>La principal ventaja de utilizar JavaScript para el desarrollo web es que podemos modificar la Dom como queramos y los
>desarrolladores pueden crearla tan rápido como en comparación con otros lenguajes de programación.
>
>**La siguiente característica es la sintaxis y la estructura.**
>
>JavaScript tiene una sintaxis de tipo C similar a la de lenguajes como Java y C plus.
>Utiliza punto y coma para terminar las sentencias y llaves para definir los bloques.
>Las variables se declaran utilizando palabras clave como var, let o constant.
>Las funciones son una característica esencial y los objetos y las matrices son estructuras de datos fundamentales.
>Así que la sintaxis y la estructura del JavaScript es muy similar a Java y C plus plus, pero la funcionalidad
>sabia todo está en un nivel muy diferente.
>La siguiente característica de JavaScript es la compatibilidad entre navegadores, que es una de las principales ventajas
>de JavaScript.
>
>**La siguiente función es Ecmascript.**
>
>JavaScript estándar se adhiere a la ECMA, que es European Computer Manufacturers Association script estándar, que
>define las especificaciones y características del lenguaje.
>Existen diferentes versiones de script que introducen nuevas características y mejoras en el lenguaje.
>
>Por ejemplo, Ecmascript seis, que es el ES6, que es la última versión de JavaScript, trajo una mejora significativa,
>incluyendo la plantilla de función de flecha, tripletas y sintaxis de clase, etcétera.
>
>**La siguiente característica de JavaScript es la versatilidad.**
>
>JavaScript no se limita al desarrollo web.
>Con la llegada de NodeJS, los desarrolladores pueden utilizar JavaScript para crear scripts del lado del servidor, crear servidores
>web y crear aplicaciones backend escalables.
>
>**En resumen, JavaScript es un lenguaje de programación versátil que desempeña un papel fundamental en el desarrollo web al permitir la creación de aplicaciones web dinámicas, interactivas y con capacidad de respuesta.**
>
>Su evolución constante.
>La compatibilidad entre navegadores y la diversidad del ecosistema lo convierten en una habilidad valiosa tanto para los desarrolladores
>front-end como back-end.
>Como ingeniero de automatización de pruebas, aprender JavaScript puede ayudarnos de muchas, muchas maneras al adherirnos a aprender muchas herramientas
>nuevas como `Cypress`, `PlayWright` y etcétera, las cuales todas han sido escritas por JavaScript.

### 9. Prerequisite Needed

>[!IMPORTANT]
>
>* [Visual Studio Code](https://code.visualstudio.com/download), editor liviano y muy acorde con `JavaScript`, pero ya existen otros que le compiten y con `I.A.` integrado ejemplos:
>   * [Las 10 mejores alternativas a Cursor AI (mejores que Github Copilot, código abierto)](https://apidog-com.translate.goog/blog/top-10-cursor-ai-alternatives/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc&_x_tr_hist=true)
>   * [Cursor vs Windsurf vs GitHub Copilot](https://www-builder-io.translate.goog/blog/cursor-vs-windsurf-vs-github-copilot?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc&_x_tr_hist=true).
>* [Download Node.js®](https://nodejs.org/en/download), Esta es la versión para Windows, pero...
>* [Instalar múltiples versiones de Node.js en Windows](https://rafaelneto.dev/blog/instalar-multiples-versiones-nodejs-windows/), prefiero utilizar esta que se instala con [nvm-Windows](https://github.com/coreybutler/nvm-windows/releases), pues permite varias versiones.
>* [pnpm Installation](https://pnpm.io/installation), similar a `npm` (que viene por defecto en la instalación de `nodejs`), pero mas rápido y con mejor manejo de almacenamiento.

1. Creamos la csarpeta **"02-JavaScriptBasics"**.
2. Allí creamos el archivo **`HelloWorld.js`**,y le ponemos este código: </br>`console.log("HELLO WORLD!!");`
3. Abrimos una `TERMINAL` dentro de `Visual Studio Code` y ejecutamos este comando, para cambiar de carpeta:
```dos
cd ./02-JavaScriptBasics/
```
4. En la misma `TERMINAL` este otro comando:
```dos
node HelloWorld.js
```
5. El Instructor sugiere instalar en `Visual Studio Code`, la extensión [![Code Runner](https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/code-runner/0.12.2/1712309175692/Microsoft.VisualStudio.Services.Icons.Default "Code Runer")](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) de [Jun Han](https://marketplace.visualstudio.com/publishers/formulahendry)
6. En la parte izquierda donde sale los archivos y carpetas, se da clic derecho sobre el archivo, y se puede seleccionar `Run Code`.

### 10. Variables

>[!NOTE]
>
>Variable es un contenedor para un valor. Las variables pueden contener diversos tipos de datos, como números, cadenas u objetos. Proporcionan una forma de manipular y almacenar los datos durante el programa.

1. Creamos el archivo **`02-JavaScriptBasics/variable.js`**.
2. Ponemos este código:
```js
var myName = "John Doe";
let myAge = 30;
const myCountry = "USA";
console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Country:", myCountry);
```
3. Damos clic derecho sobre **`variable.js`**, y seleccionamos `Code Run`.
>[!NOTE]
>
>**¿Cuáles son las principales diferencias entre var, let y const?**
>
>Las variables que se declaran con var son de ámbito de función, lo que significa que son accesibles
>en toda la función en la que se definen.
>Si la declaramos fuera de una función, esta variable declarada var estará disponible globalmente.
>
>Las variables let y const tienen ámbito de bloque, lo que significa que están limitadas a un ámbito en un bloque, lo
>que significa que se crea un bloque utilizando llaves.
>
>Aprenderemos más sobre esto en detalle en nuestros próximos vídeos en los que hablaremos de los temas de alcance.
>La única diferencia importante entre var let y const es.
>Var y let pueden modificarse.
>Mientras que si asignamos un valor a la constante que no se puede modificar.
4. Ejemplo puedeo ñadir este código y es permitido:
```js
// Changing the value of myName
myName = "Jane Doe"; // This is allowed because myName is declared with var
myAge = 31; // This is allowed because myAge is declared with let
// myCountry = "Canada"; // This would cause an error because myCountry is declared with const
console.log("Updated Name:", myName);
console.log("Updated Age:", myAge);
// console.log("Updated Country:", myCountry); // Uncommenting this line would cause an error
```

### 11. Datatypes

1. Creamos el archivo **`02-JavaScriptBasics/dataTypes.js`**.
>[!NOTE]
>**Primitive Data Types:**
>1. String: Represents text, enclosed in single or double quotes.
>2. Number: Represents numeric values, both integers and floating-point numbers.
>3. Boolean: Represents a logical entity and can have two values: true or false.
>4. Undefined: A variable that has been declared but not assigned a value.
>5. Null: Represents the intentional absence of any object value.
>6. Symbol: A unique and immutable primitive value, often used as object property keys.
>7. BigInt: Represents integers with arbitrary precision, useful for very large numbers.
>
>**Complex Data Types:**
>1. Object: A collection of key-value pairs, where keys are strings (or Symbols) and values can be of any type.
>2. Array: A special type of object that holds an ordered collection of values, which can be of any type.
>3. Function: A callable object that can be invoked to perform a specific task or computation.
>4. Date: Represents a specific point in time, allowing for date and time manipulation.
>5. RegExp: Represents a regular expression, used for pattern matching in strings.
>6. Map: A collection of keyed data items, similar to an object, but with keys of any type and maintaining the order of insertion.
>7. Set: A collection of unique values, where each value can only occur once, regardless of type.
>8. WeakMap: Similar to Map, but allows for garbage collection of keys that are not referenced elsewhere.
>9. WeakSet: Similar to Set, but allows for garbage collection of values that are not referenced elsewhere.
>
2. Creamos y mostramos los tipos primitivos:
```js
let num1 = 42; // Number
let str1 = "Hello, World!"; // String
let bool1 = true; // Boolean
let undef1; // Undefined (declared but not assigned)
let null1 = null; // Null (intentional absence of value)
let sym1 = Symbol("unique"); // Symbol (unique identifier)
let bigInt1 = BigInt(123456789012345678901234567890);
// Displaying the values
console.log("Primitive Data Types:");
console.log("Number:", num1);
console.log("String:", str1);
console.log("Boolean:", bool1);
console.log("Undefined:", undef1);
console.log("Null:", null1);
console.log("Symbol:", sym1);
console.log("BigInt:", bigInt1);
```
3. Resultado inicial:
```json
Primitive Data Types:
Number: 42
String: Hello, World!
Boolean: true
Undefined: undefined
Null: null
Symbol: Symbol(unique)
BigInt: 123456789012345677877719597056n
```
4. Hacemos lo mismo con los valores Tipos Complejos:
```js
let obj1 = { name: "Alice", age: 30 }; // Object
let arr1 = [1, 2, 3, "four", true]; // Array
let func1 = function () {
  return "Hello from a function!";
}; // Function
let date1 = new Date(); // Date
let regExp1 = /abc/; // RegExp
let map1 = new Map(); // Map
map1.set("key1", "value1");
let set1 = new Set(); // Set
set1.add(1);
set1.add(2);
let weakMap1 = new WeakMap(); // WeakMap
let obj2 = {};
weakMap1.set(obj2, "WeakMap value");
let weakSet1 = new WeakSet(); // WeakSet
let obj3 = {};
weakSet1.add(obj3); // Adding an object to WeakSet
// Displaying the values

console.log("\nComplex Data Types:");
console.log("Object:", obj1);
console.log("Array:", arr1);
console.log("Function:", func1());
console.log("Date:", date1);
console.log("RegExp:", regExp1);
console.log("Map:", map1);
console.log("Set:", set1);
console.log("WeakMap:", weakMap1.get(obj2)); // Accessing value from WeakMap
console.log("WeakSet contains obj3:", weakSet1.has(obj3)); // Checking if WeakSet contains obj3
```
5. Esto es lo que sería la otra parte:
```json
Complex Data Types:
Object: { name: 'Alice', age: 30 }
Array: [ 1, 2, 3, 'four', true ]
Function: Hello from a function!
Date: 2025-07-05T15:58:55.443Z
RegExp: /abc/
Map: Map(1) { 'key1' => 'value1' }
Set: Set(2) { 1, 2 }
WeakMap: WeakMap value
WeakSet contains obj3: true
```

### 12. Operators

1. Creamos el archivo **`02-JavaScriptBasics/operators.js`**.
>[!NOTE]
>**Operators in JavaScript:**
>1. Arithmetic Operators: Used for mathematical operations.
> * Addition (+)
> * Subtraction (-)
> * Multiplication (*)
> * Division (/)
> * Modulus (%)
> * Exponentiation (**)
>2. Assignment Operators: Used to assign values to variables.
> * Assignment (=)
> * Addition assignment (+=)
> * Subtraction assignment (-=)
> * Multiplication assignment (*=)
> * Division assignment (/=)
> * Modulus assignment (%=)
> * Exponentiation assignment (**=)
>3. Comparison Operators: Used to compare values.
> * Equal to (==)
> * Not equal to (!=)
> * Strict equal to (===)
> * Strict not equal to (!==)
> * Greater than (>)
> * Less than (<)
> * Greater than or equal to (>=)
> * Less than or equal to (<=)
>4. Logical Operators: Used to perform logical operations.
> * Logical AND (&&)
> * Logical OR (||)
> * Logical NOT (!)
>5. Bitwise Operators: Used to perform bit-level operations.
> * Bitwise AND (&)
> * Bitwise OR (|)
> * Bitwise XOR (^)
> * Bitwise NOT (~)
> * Left shift (<<)
> * Right shift (>>)
> * Unsigned right shift (>>>)
>6. Ternary Operator: A shorthand for if-else statements.
> * Conditional (condition ? expr1 : expr2)
>7. Typeof Operator: Used to determine the type of a variable.
> * typeof variable
>8. Instanceof Operator: Used to check if an object is an instance of a specific class.
> * object instanceof Class
>9. Comma Operator: Used to evaluate multiple expressions and return the last one.
> * (expr1, expr2, ..., exprN)
>10. Spread Operator: Used to expand an iterable (like an array) into its elements.
> * [...iterable]
>11. Rest Operator: Used to collect multiple elements into an array.
> * function(...args) { ... }
>12. Nullish Coalescing Operator: Returns the right-hand operand when the left-hand operand is null or undefined.
> * left ?? right
>13. Optional Chaining Operator: Allows reading the value of a property located deep within a chain of connected objects without having to check if each reference in the chain is nullish.
> * object?.property

2. Primera tanda de operadores:
```js
let a = 10;
let b = 5;

// Arithmetic Operators
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus
let exponentiation = a ** b; // Exponentiation
console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
console.log(`Remainder: ${remainder}`);
console.log(`Exponentiation: ${exponentiation}`);
```
3. Y este sería el resultado:
```json
Sum: 15
Difference: 5
Product: 50
Quotient: 2
Remainder: 0
Exponentiation: 100000
```
4. Otros Operadores de asignación:
```js
// Assignment Operators
let x = 10;
x += 5; // Addition assignment
console.log(`x after addition assignment: ${x}`);
x -= 3; // Subtraction assignment
console.log(`x after subtraction assignment: ${x}`);
x *= 2; // Multiplication assignment
console.log(`x after multiplication assignment: ${x}`);
x /= 3; // Division assignment
console.log(`x after division assignment: ${x}`);
x %= 5; // Modulus assignment
console.log(`x after modulus assignment: ${x}`);
x **= 2; // Exponentiation assignment
console.log(`x after exponentiation assignment: ${x}`);
```
6. Y este sería el resultado:
```json
x after addition assignment: 15
x after subtraction assignment: 12
x after multiplication assignment: 24
x after division assignment: 8
x after modulus assignment: 3
x after exponentiation assignment: 9
```
7. Esta otra tanda para comparar:
```js
// Comparison Operators
let c = 10;
let d = '10';
console.log(`c: ${c}, d: '${d}'`);
let isEqual = (c == d); // Equal to
let isNotEqual = (c != d); // Not equal to
let isStrictEqual = (c === d); // Strict equal to 
let isStrictNotEqual = (c !== d); // Strict not equal to
let isGreaterThan = (c > d); // Greater than
let isLessThan = (c < d); // Less than
let isGreaterThanOrEqual = (c >= d); // Greater than or equal to
let isLessThanOrEqual = (c <= d); // Less than or equal to
console.log(`Is Equal: ${isEqual}`);
console.log(`Is Not Equal: ${isNotEqual}`);
console.log(`Is Strict Equal: ${isStrictEqual}`);
console.log(`Is Strict Not Equal: ${isStrictNotEqual}`);
console.log(`Is Greater Than: ${isGreaterThan}`);
console.log(`Is Less Than: ${isLessThan}`); 
```
8. Y este resultado entre un número y una cadena:
```json
c: 10, d: '10'
Is Equal: true
Is Not Equal: false
Is Strict Equal: false
Is Strict Not Equal: true
Is Greater Than: false
Is Less Than: false
```
9. Operadores lógicos:
```js
// Logical Operators
let e = true;
let f = false;
let andOperation = e && f; // Logical AND
let orOperation = e || f; // Logical OR
let notOperation = !e; // Logical NOT
console.log(`AND Operation: ${andOperation}`);
console.log(`OR Operation: ${orOperation}`);
console.log(`NOT Operation: ${notOperation}`);
```
10. Con este resultado:
```json
AND Operation: false
OR Operation: true
NOT Operation: false
```
11. Operadores unitarios y ternarios:
```js
// Unary Operators
let g = 5;
let increment = ++g; // Increment
let decrement = --g; // Decrement
console.log(`Increment: ${increment}`);
console.log(`Decrement: ${decrement}`);

//Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No"; // Ternary operator
console.log(`Can vote: ${canVote}`);
```
12. Esta es la respuesta:
```json
Increment: 6
Decrement: 5
Can vote: Yes
```
13. Tipo de datos:
```js
// Typeof Operator
let variable = "Hello";
let typeOfVariable = typeof variable; // Typeof operator
console.log(`Type of variable: ${typeOfVariable}`);
```
14. Y la respuesta es :`Type of variable: string`.
15. Los Binarios o _bitwise_ operadores con estos:
```js
// Binary or Bitwise Operators
let h = 5;
let i = 3;
let bitwiseAnd = h & i; // Bitwise AND
let bitwiseOr = h | i; // Bitwise OR
let bitwiseXor = h ^ i; // Bitwise XOR
let bitwiseNot = ~h; // Bitwise NOT
let leftShift = h << 1; // Left shift
let rightShift = h >> 1; // Right shift
let unsignedRightShift = h >>> 1; // Unsigned right shift
console.log(`Bitwise AND: ${bitwiseAnd}`);
console.log(`Bitwise OR: ${bitwiseOr}`);
console.log(`Bitwise XOR: ${bitwiseXor}`);
console.log(`Bitwise NOT: ${bitwiseNot}`);
console.log(`Left Shift: ${leftShift}`);
console.log(`Right Shift: ${rightShift}`);
console.log(`Unsigned Right Shift: ${unsignedRightShift}`);
```
16. Y esto es después de ejecutar:
```json
Bitwise AND: 1
Bitwise OR: 7
Bitwise XOR: 6
Bitwise NOT: -6
Left Shift: 10
Right Shift: 2
Unsigned Right Shift: 2
```

### 13. Conditional statement

1. Empezamos creando el archivo **`02-JavaScriptBasics/operators.jsconditionStatement.js`**.
2. Agrego este código, con un condicional básico:
```js
let age = 20;
if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}
```
3. Esta sería la respuesta:</br>`You are an adult.`

### 14. Switch Statement

1. Creamos el archivo **`02-JavaScriptBasics/switchStatement.js`**.
2. Pongo este código:
```js
// Switch Statement Example
function getDayName(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }

    return dayName;
}
// Example usage
console.log(getDayName(0)); // Output: Sunday
console.log(getDayName(3)); // Output: Wednesday
console.log(getDayName(6)); // Output: Saturday
console.log(getDayName(7)); // Output: Invalid day number
```
3. Al ejecutar obtengo esto:
```dos
Sunday
Wednesday
Saturday
Invalid day number
```


## Section 3: Javascript Advanced Level

### 15. Loops

1. Empezamos creando la carpeta **"03_JavascriptAdvancedLevel"**.
2. Dentro de la nueva carpeta creamos el archivo **`loops.js`**.
>[!NOTE]
>
>Los bucles en JavaScript son estructuras de control que permiten ejecutar un bloque de código repetidamente, siempre que se cumpla
>una determinada condición, o hasta que se alcance un número especificado de iteraciones.
>
>JavaScript ofrece tres tipos principales de bucles.
>Bucle `for`, bucle `while` y bucle `do while`, veremos uno por uno.
3. Empezamos con el bucle `for`:
```js
/* for loop
for (initialization; condition; increment/decrement) {
     // code to be executed
 }
*/
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0 1 2 3 4
}
```
4. El siguiente es el bucle `while`:
```js
/* while loop
while (condition) {
     // code to be executed
 }
*/
let j = 0;
while (j < 5) {
  console.log(j); // Output: 0 1 2 3 4
  j++;
}
```
5. Por último el bucle `do while`:
```js
/* do while loop
do {
     // code to be executed
} while (condition);
*/
let k = 0;
do {
  console.log(k); // Output: 0 1 2 3 4
  k++;
}while (k < 5);
```
6. Las declaraciones `Break` y `Continue`:
```js
// Break and Continue
for (let l = 0; l < 5; l++) {
  if (l === 2) {
    continue; // Skip the iteration when l is 2
  }
  console.log(l); // Output: 0 1 3 4
} 
for (let m = 0; m < 5; m++) {
  if (m === 3) {
    break; // Exit the loop when m is 3
  }
  console.log(m); // Output: 0 1 2
}
```

### 16. Dynamic-Typing

1. Creamos el archivo **`03_JavascriptAdvancedLevel/dynamicTyping.js`**.
>[!NOTE]  
>
>La tipificación dinámica, también conocida como tipificación duck, es un concepto fundamental en JavaScript y en muchos otros lenguajes de programación
>de tipificación dinámica.
>
>Se refiere a la capacidad de las variables para cambiar sus tipos de datos durante el tiempo de ejecución, lo que permite un comportamiento
>flexible y dinámico en su código.
2. Este sería el código y su respuesta esperada:}
```js
// Type inference in JavaScript is a feature that allows the JavaScript engine to automatically determine the type of a variable at runtime.
//  This means that you do not need to explicitly declare the type of a variable when you create it. Instead, the engine infers the type based on the value assigned to the variable.

let dynamicVariable = 42; // Initially a number
console.log(typeof dynamicVariable); // Output: "number"
dynamicVariable = "Hello, World!"; // Now a string
console.log(typeof dynamicVariable); // Output: "string"
dynamicVariable = true; // Now a boolean
console.log(typeof dynamicVariable); // Output: "boolean"
dynamicVariable = { key: "value" }; // Now an object
console.log(typeof dynamicVariable); // Output: "object"
dynamicVariable = [1, 2, 3]; // Now an array (which is also an object)
console.log(typeof dynamicVariable); // Output: "object"
dynamicVariable = null; // Now null
console.log(typeof dynamicVariable); // Output: "object" (this is a known quirk in JavaScript)
dynamicVariable = undefined; // Now undefined
console.log(typeof dynamicVariable); // Output: "undefined"
dynamicVariable = Symbol("unique"); // Uncommenting this line would make it a Symbol
console.log(typeof dynamicVariable); // Output: "symbol"
dynamicVariable = function () {}; // Uncommenting this line would make it a function
console.log(typeof dynamicVariable);
```
3. Otro ejemplo sería validanto el tipo:
```js
// Type checking
dynamicVariable = [1, 2, 3];
console.log('is number?', typeof dynamicVariable === "number"); // Output: false
console.log('is string?', typeof dynamicVariable === "string"); // Output: false
console.log('is boolean?', typeof dynamicVariable === "boolean"); // Output: false
console.log('is object?', typeof dynamicVariable === "object"); // Output: true
console.log('is array?', Array.isArray(dynamicVariable)); // Output: false (since it's not an array)
console.log('is null?', dynamicVariable === null); // Output: false (since it's not null)
console.log('is undefinied?', dynamicVariable === undefined); // Output: false (since it's not undefined)
console.log('is symbol?', typeof dynamicVariable === "symbol"); // Output: false (since it's not a symbol)
console.log('is function?', typeof dynamicVariable === "function"); // Output: false (since it's not a function)
```


### 17. Arrays

1. Creamos el archivo **`03_JavascriptAdvancedLevel/arrays.js`**.
2. Empezamos con esta tanda:
```js
// Arrays

// Array literal
const fruits = ['apple', 'banana', 'orange']; 

// Array constructor
const vegetables = new Array('carrot', 'broccoli', 'spinach');  

console.log(fruits); // ['apple', 'banana', 'orange']
console.log(vegetables[1]); // 'broccoli'
```
3. Luego probamos esta:
```js
// Length of an array
console.log(fruits.length); // 3
```
4. Agregamos un elemento al final del arreglo:
```js
// Add elemento to the end of an array
fruits.push('grape');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
```
5. Borramosel último elemento del arreglo:
```js
// Delete the last element of an array
fruits.pop();
console.log(fruits); // ['apple', 'banana', 'orange']
```
6. Recorrerlo a través de un ciclo:
```js
// Iterate using loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // 'apple', 'banana', 'orange'
} 
```
7. Recorrelo con `forEach`:
```js
// Iterate using forEach
fruits.forEach((fruit) => {
    console.log(fruit); // 'apple', 'banana', 'orange'
});

```
8. Recorrer usando `for..of`:
```js
// Iterate using for...of
for (const fruit of fruits) {
    console.log(fruit); // 'apple', 'banana', 'orange'
}
```


### 18. Objects

1. Creamos el archivo **`03_JavascriptAdvancedLevel/objects.js`**.
2. Ponemos este código inicial con un `Object Literal`:
```js
// Object Literal
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(person.name); // 'John'
console.log(person["age"]); // 30
person.greet(); // 'Hello, my name is John'
```
3. Ahora probamos el `Object Constructor`:
```js
// Object Constructor
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
Car.prototype.getDetails = function () {
  return `${this.year} ${this.make} ${this.model}`;
};
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getDetails()); // '2020 Toyota Corolla'
```
4. Puedo adiciona métodos y propiedades:
```js
// Adding properties and methods
myCar.color = "red";
myCar.start = function () {
  console.log(`Starting the ${this.color} ${this.make} ${this.model}`);
}
console.log(myCar.color); // 'red'
myCar.start(); // 'Starting the red Toyota Corolla'
```
5. Puedo adicionar y desesctructurar:
```js
// Object Property Access
person.job = "Developer";
console.log(person.job); // 'Developer'
person.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am a ${this.job}`);
}
person.greet(); // 'Hello, my name is John and I am a Developer'  

// Object Destructuring
const { name, age } = person;
console.log(name); // 'John'
console.log(age); // 30
```

