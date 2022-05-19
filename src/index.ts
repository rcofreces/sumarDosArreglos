let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let indice1: number;
let indice2: number;

for (indice1 = 0; indice1 < 6; indice1++) {
  arreglo1[indice1] = Number(
    prompt(`Ingrese el número del arreglo 1 en la posición ${indice1}`)
  );
}

for (indice2 = 0; indice2 < 6; indice2++) {
  arreglo2[indice2] = Number(
    prompt(`Ingrese el número del arreglo 2 en la posición ${indice1}`)
  );
}

for (indice1 = 0; indice1 < 6; indice1++) {
  console.log(
    `El número ingresado en la posición ${indice1} del arreglo 1 es: ${arreglo1[indice1]}`
  );
}

for (indice2 = 0; indice2 < 6; indice2++) {
  console.log(
    `El número ingresado en la posición ${indice2} del arreglo 2 es: ${arreglo2[indice2]}`
  );
}
