let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let indice1, indice2: number;

for (indice1 = 0; indice1 < 6; indice1++) {
  arreglo1[indice1] = Number(
    prompt(`Ingrese el número del arreglo 1 en la posición ${indice1}`)
  );
  console.log(
    `El número ingresado en la posición ${indice1} del arreglo 1 es: ${arreglo1[indice1]}`
  );
}

for (indice2 = 0; indice2 < 6; indice2++) {
  arreglo2[indice2] = Number(
    prompt(`Ingrese el número del arreglo 2 en la posición ${indice2}`)
  );
  console.log(
    `El número ingresado en la posición ${indice2} del arreglo 2 es: ${arreglo2[indice2]}`
  );
}

let resultado0: number = arreglo1[0] + arreglo2[0];
let resultado1: number = arreglo1[1] + arreglo2[1];
let resultado2: number = arreglo1[2] + arreglo2[2];
let resultado3: number = arreglo1[3] + arreglo2[3];
let resultado4: number = arreglo1[4] + arreglo2[4];
let resultado5: number = arreglo1[5] + arreglo2[5];

console.log(
  `El resultado de la suma de la primera posición de los arreglos 1 y 2 es: ${resultado0}`
);
console.log(
  `El resultado de la suma de la segunda posición de los arreglos 1 y 2 es: ${resultado1}`
);
console.log(
  `El resultado de la suma de la tercer posición de los arreglos 1 y 2 es: ${resultado2}`
);
console.log(
  `El resultado de la suma de la cuarta posición de los arreglos 1 y 2 es: ${resultado3}`
);
console.log(
  `El resultado de la suma de la quinta posición de los arreglos 1 y 2 es: ${resultado4}`
);
console.log(
  `El resultado de la suma de la sexta posición de los arreglos 1 y 2 es: ${resultado5}`
);

function sumarArreglos(arregloA: number[], arregloB: number[]): number[] {
  let resultado: number[] = [];
  for (let i = 0; i < arregloA.length; i++) {
    resultado[i] = arregloA[i] + arregloB[i];
  }
  return resultado;
}

console.log("La suma de los arreglos es:", sumarArreglos(arreglo1, arreglo2);
