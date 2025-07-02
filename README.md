# Cypress V14.4.0 -Docker + Cucumber + Jenkins -JUNE'25 Course

## Cypress-14-Docker-Cucumber-Jenkins-JUNE25

<https://www.udemy.com/course/cypress-ultimate-course/>

[![Curso reciente ](images/2025-07-02_141637.png "Crea y Despliega un Sistema de Ventas FULL STACK con REACT y PostgreSQL | 2025")](https://www.youtube.com/watch?v=URG4rnmdThs&t=270s)

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
>`Cypress` ofrece algunas características sorprendentes en comparación con otras herramientas de automatización como `Selenium`, Playwright, WebDriver, IO, etc. Veámoslos uno por uno.
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
