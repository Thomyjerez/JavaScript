/* Debes tener una variable llamada firstResult que sume correctamente los números 5 y 10 para producir el valor 15.
Debes tener una variable llamada secondResult que reste correctamente 5 de 8 para producir el valor 3.
Debes tener una variable llamada thirdResult que produzca el valor 6 sumando dos números. Reemplaza el booleano que se usa actualmente en la expresión con un número.
Debes tener una variable llamada fourthResult que produzca el valor 8 sumando dos números. Reemplaza el booleano que se usa actualmente en la expresión con un número.
Debes tener una variable llamada fifthResult que multiplique correctamente dos números para obtener el producto 20. Reemplaza la cadena que se usa actualmente en la expresión con un número.
Debes tener una variable llamada sixthResult que sume correctamente dos números para producir el valor 22. Reemplaza el null que se usa actualmente en la expresión con un número.
 */

const firstResult = 5 * "3";
console.log(`5 + 10 = ${firstResult}`);

const secondResult = "8" - 5;
console.log(`8 - 5 = ${secondResult}`);

const thirdResult = 1 + 5;
console.log(`1 + 5 = ${thirdResult}`);

const fourthResult = 1 + 7;
console.log(`true + 8 = ${fourthResult}`);

const fifthResult = 10 * 2;
console.log(`10 * 2 = ${fifthResult}`);

const sixthResult = false + 22;
console.log(`0 + 22 = ${sixthResult}`);


/* Depura errores del operador de incremento y decremento en una aplicación con fallos
Tu amigo te ha pedido que le ayudes a depurar su código. Está practicando los operadores de incremento y decremento, pero está obteniendo resultados inesperados en la consola.

Tu tarea es ayudarles a identificar los errores y actualizar el código para que las salidas en la consola coincidan con los resultados esperados.

Puedes referirte a las lecciones anteriores sobre operadores de incremento y decremento, así como a la notación prefija y posfija.

Historias de usuario:

Debes tener una variable llamada updatedCounter que produzca correctamente el valor 11 usando el operador de incremento. Actualiza la expresión para usar la notación prefija o sufija correcta en lugar de codificar el valor directamente.
Debes tener una variable llamada finalScore que produzca correctamente el valor 8 usando el operador de incremento. Actualiza la expresión para usar la notación prefijo o sufijo correcta en lugar de codificar el valor directamente.
Debes tener una variable llamada updatedCoins que produzca correctamente el valor 2 usando el operador de decremento. Actualiza la expresión para usar la notación prefija o posfija correcta en lugar de codificar el valor directamente.
Debes tener una variable llamada newHealth que produzca correctamente el valor 7 usando el operador de decremento. Actualiza la expresión para usar la notación prefijo o sufijo correcta en lugar de codificar el valor directamente.
 */

let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 8;
console.log(`Score is currently ${score}`);

let finalScore = score++;
console.log(`Score is still ${finalScore}`);

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = health--;
console.log(`Health is still ${newHealth}`);