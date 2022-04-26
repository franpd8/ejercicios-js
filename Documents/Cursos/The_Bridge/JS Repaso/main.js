// --------------------------------------------------------------------
// 1.BUCLES
// --------------------------------------------------------------------
// Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.
for (i = 4; i <= 9; i++) {
  console.log("Número ", i);
}
// --------------------------------------------------------------------
// Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.
for (i = 3; i <= 17; i++) {
  if (i % 2 != 0) {
    console.log("El número es ", i);
  }
}
// Utiliza la siguiente array para resolver los próximos ejercicios:

let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];
console.log("Tenemos a :");
for (let persona of gente) {
  console.log(persona);
}
// Crea un array con la gente mayor de 25 años y muéstralo por consola. Sin utilizar el método filter de los arrays. Utilizad el bucle for of.

console.log("Tienen más de 25 años:");
let mayor25 = [];
for (persona of gente) {
  if (persona.edad >= 25) {
    mayor25.push(persona.nombre);
  }
}
console.log(mayor25, "tienen más de 25 años");

// Crea un array con la gente que empieza por J. Sin utilizar el método filter de los arrays. Utilizad el bucle for of y muéstralo por consola.

console.log("Sus nombres empieza por J:");
let nombreJ = [];
for (persona of gente) {
  if (persona.nombre.startsWith("J")) {
    nombreJ.push(persona.nombre);
  }
}
console.log(nombreJ, "sus nombres empieza por J");
// Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.

console.log("Sus nombres tiene cuatro letras");
let nombre4 = [];
for (persona of gente) {
  //  Podemos hacer === 4 para sólo cuatro letras o <=4 para menor de 4
  if (persona.nombre.length === 4) {
    nombre4.push(persona.nombre);
  }
}
console.log(nombre4, "sus nombres tiene cuatro letras");

// Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.

console.log("Personas menores de 40 años cuyo nombre empieza por J");
let menor40conJ = [];

for (persona of gente) {
  if (persona.edad < 40 && persona.nombre.startsWith("J")) {
    menor40conJ.push(persona.nombre);
  }
}
console.log(menor40conJ, "son menores de 40 años y su nombre empieza por J");

// --------------------------------------------------------------------
// 2.OBJETOS
// --------------------------------------------------------------------

// Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'

const ordenador = {
  marca: "La pava",
  tipo: "portátil",
  perifericos: ["screen", "touchPad", "fingerDetector", "Dolby-Speakers"],
  almacenamiento: {
    discos: ["notHDD", "HDD"],
    maestro: 0,
  },
};

// El objeto(ordenador) que hemos creado consta de: marca = string, tipo = string, perifericos = array, almacenamiento = objeto otra vez

// TEST 1
console.log("TEST 1:");
if (typeof ordenador === "object") {
  console.log("Apruebas ");
} else {
  console.log("Suspendes");
}
// TEST 2
console.log("TEST 2:");
if (ordenador.marca === "La pava") {
  console.log("Apruebas");
} else {
  console.log("Suspendes");
}
// TEST 3
console.log("TEST 3:");
if (ordenador.tipo === "portátil") {
  console.log("Apruebas");
} else {
  console.log("Suspendes");
}
// TEST 4
console.log("TEST 4:");
if (ordenador.perifericos[1] === "touchPad") {
  console.log("Apruebas");
} else {
  console.log("Suspendes");
}
// TEST 5
console.log("TEST 5:");
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
  console.log("Apruebas");
} else {
  console.log("Suspendes");
}
// TEST 6
console.log("TEST 6:");
if (ordenador.almacenamiento.maestro === 0) {
  console.log("Apruebas");
} else {
  console.log("Suspendes");
}
// --------------------------------------------------------------------
// Crea un objeto en la variable llamada obj de tal modo que el siguiente código no muestre por consola 'suspendes'

const obj = {
  a: {
    b: true,
    c: [48, 69, 2980],
  },
  d: 7,
  f: "hola",
};

//TEST 1
console.log("Test Objeto");
if (typeof obj === "object") {
  console.log("apruebas");
} else {
  console.log("supendes");
}

//TEST 2
console.log("Test Objeto 2");
if (typeof obj.a.b === "boolean") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 3
console.log("Test Objeto 3");
if (typeof obj.a.c[1] === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 4
console.log("Test Objeto 4");
if (typeof obj.d === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 5
console.log("Test Objeto 5");
if (obj.d > 4 && obj.d < 8) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
console.log("Test Objeto 6");
if (typeof obj.f === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 7
console.log("Test Objeto 7");
if (obj.f.length === 4) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// --------------------------------------------------------------------
// Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes'
const arr = [
  { name: "pepito", age: 25 },
  { name: "pepito", age: 23 },
  { name: "Juanito", age: 21 },
];

// TEST 1
console.log("Test Array 1");
if (typeof arr === "object" && arr.length >= 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
console.log("Test Array 2");
if (typeof arr[0] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
console.log("Test Array 3");
if (typeof arr[1] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
console.log("Test Array 4");
if (typeof arr[2] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
console.log("Test Array 5");
if (arr.length === 3) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
console.log("Test Array 6");
if (arr[0].name === arr[1].name) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 7
console.log("Test Array 7");
if (arr[1].name === "pepito") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 8
console.log("Test Array 8");
if (arr[1].age > arr[2].age) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 9
console.log("Test Array 9");
if (arr[0].age === 25) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 10
console.log("Test Array 10");
if (typeof arr[2].name === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 11
console.log("Test Array 11");
if (arr[2].name[0] === "J") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// --------------------------------------------------------------------
// 3.FUNCIONES
// --------------------------------------------------------------------

// Crea la función convierteString debe recibir un tipo number y devolver el número como string .
// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'
console.log("//////Funcion convierteString//////");
function convierteString(num) {
  if (typeof num === "number") {
    return num.toString();
  } else {
    console.log("Debo ser ejecutada con un número");
  }
}

console.log("convertimos el", 23, "en ", convierteString(23));

console.log(convierteString("hola"));

// --------------------------------------------------------------------
//  Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
console.log("//////Funcion caracterInicial//////");
function caracterInicial(texto1) {
  if (typeof texto1 === "string") {
    if (texto1.length === 0) {
      console.log("Debo ser ejecutada con un string no vacío");
    }
    return texto1.substring(0, 1);
  } else {
    console.log("Debo ser ejecutada con un string");
  }
}

console.log(
  "Ejemplo, la primera letra de Marta es: ",
  caracterInicial("Marta")
);
console.log("Ejemplo, la primera letra de es: ", caracterInicial(""));
console.log("Ejemplo, la primera letra de 123 es: ", caracterInicial(123));

// --------------------------------------------------------------------
//  Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
console.log("//////Funcion ultimoCaracter//////");
function ultimoCaracter(texto2) {
  if (typeof texto2 === "string") {
    if (texto2.length === 0) {
      console.log("Debo ser ejecutada con un string no vacío");
    }
    return texto2.substring(texto2.length - 1, texto2.length);
  } else {
    console.log("Debo ser ejecutada con un string");
  }
}

console.log("Ejemplo, la ultima letra de Laura es: ", ultimoCaracter("Laura"));
console.log("Ejemplo, la ultima letra de '   'es: ", ultimoCaracter(""));
console.log("Ejemplo, la ultima letra de 123 es: ", ultimoCaracter(123));

// --------------------------------------------------------------------
// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres. Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'
console.log("//////Funcion cuentaCaracteres//////");
function cuentaCaracteres(texto3) {
  if (typeof texto3 === "string") {
    return texto3.toString().length;
  } else {
    console.log("Debo ser ejecutada con un string");
  }
}
texto3 = "esternocleidomastoideo";

console.log(
  "¿Cuantos caracteres hay en 'esternocleidoastoideo'? Hay",
  cuentaCaracteres(texto3),
  "caracteres"
);
console.log(
  "¿Cuantos caracteres hay en '23'? Hay",
  cuentaCaracteres(23),
  "caracteres"
);

// --------------------------------------------------------------------
// Crea la función getCiudadesOrdenada. La función recibirá una cadena de texto de ciudades separadas por comas y devolverá un array de ciudades ordenadas alfabéticamente si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'
console.log("//////Funcion getCiudadesOrdenada//////");

function getCiudadesOrdenada(lista) {
  if (typeof lista !== "string") {
    // Aquí estaría lo bueno :D
  } else {
    console.log("No es un formato correcto");
  }
}
// --------------------------------------------------------------------
// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

console.log("//////Funcion esPalindromo//////");
function esPalindromo(palabra) {
  if (typeof palabra === "string" && palabra.lenght != 0) {
    const palabraInversa = palabra.split("").reverse().join("");
    if (palabra === palabraInversa) {
      console.log("Es palindromo");
    } else {
      console.log("No es un palindromo");
    }
  } else {
    console.log("No es un formato correcto");
  }
}

console.log("Probamos con 'amor'", esPalindromo("amor"));
console.log("Probamos con 'ho-oh'", esPalindromo("ho-oh"));
console.log("Probamos con '23'", esPalindromo(23));

// --------------------------------------------------------------------

// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €.
//Si la función no recibe un número debería devolver devolver 'no es un formato correcto'
console.log("//////Funcion getPrecioMostrar//////");

function getPrecioMostrar(precio) {
  if (typeof precio === "number") {
    return `${precio.toFixed(2)}€`;
    // así ajustamos el formato de euros
  } else {
    console.log("No es un formato correcto");
  }
}
console.log(getPrecioMostrar(23));
console.log(getPrecioMostrar("hola"));
// --------------------------------------------------------------------
// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división
console.log("//////Funcion division//////");

const division = (divisor, dividendo) => {
  return divisor / dividendo;
};

const divisor = 20;
const dividendo = 4;

console.log(`Ejemplo de dividir ${divisor} entre ${dividendo} = ${division}`);
// --------------------------------------------------------------------
// Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

console.log("//////Funcion esPar//////");

const esPar = (numero) => {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(`Si introducimos el número 3 sale ${esPar(3)}`);
console.log(esPar(3));
// Por si quisieramos el valor booleano y no la cadena de texto

console.log(`Si introducimos el número 6 sale ${esPar(6)}`);
console.log(esPar(6));
// --------------------------------------------------------------------
// Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor

console.log("//////Ordenar Array2 /////");

const ordenarArray2 = (array2) => {
  array2 = array2.sort((a,b) => a - b);
  // ordenar de menor a mayor
  return array2.reverse();
  // invertir
};

array2 = [1, 45, 32, 29, 2, 3, 4];
console.log("Dado el array:",array2);

console.log("Ordenado de menor a mayor",array2.sort((a,b) => a - b))
console.log("Ordenado de mayor a menor",ordenarArray2(array2))

// --------------------------------------------------------------------
// Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

console.log("//////Obtener Impares /////");

function obtenerImpares (numerosMezclados){

  const numerosImpares = []
  for (const num of numerosMezclados){
    if (num % 2 !== 0 ){
      numerosImpares.push(num)
    }
  }
  return numerosImpares
}

ejemploMezclado = [ 1,2,3,4,5,6,7,8]
console.log(" Por ejemplo del array", ejemploMezclado, "los números impares son:", obtenerImpares(ejemploMezclado))

// --------------------------------------------------------------------
// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

console.log("//////Sumar Array /////");

function sumarArray (array){
  totalArray = 0

  for (const number of array){
    totalArray += number
  }
  return totalArray
}

arrayEjemplo =[1,2,3]
console.log("Dado el array",arrayEjemplo,"la suma del array sería:",sumarArray(arrayEjemplo))

// --------------------------------------------------------------------
// Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

console.log("//////Multiplicar Array /////");

function multiplicarArray (array){
  totalArray3 = 1
  // el array empezará con uno 
  for (const number of array){
    totalArray3 *= number
  }
  return totalArray3
}

array3 =[2,3,4]
console.log("Dado el array",array3,"la multiplicación del array sería:",multiplicarArray(array3))
// --------------------------------------------------------------------
// Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]
console.log("//////Cinco o más /////");

array4 =[ 3,6,8,2]
arrayCinco = []

function cincoOMás (array){
for(num of array){
  if(num > 5){
    arrayCinco.push(num)
  }
}

return arrayCinco

}
console.log("Dado el array",array4,"los valores mayores que cinco son:",cincoOMás(array4))

// --------------------------------------------------------------------
// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false. 
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

console.log("//////numero Primo /////");