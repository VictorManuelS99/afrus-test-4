//Dado un arreglo de números cualesquiera sacar la siguiente información:
//Cantidad de elementos del arreglo.
//Porcentaje de números pares e impares.
//Porcentaje de números mayores a 1000.
//Cuál es el mayor y menor valor.
//Asuma los siguientes indicadores: Tome en cuenta que el mayor número representa el 100%, indique cual es el porcentaje del número mínimo y el porcentaje del promedio de todos los números.

const array = [
  1, 1, 3, 1, 111, 1121, 412312, 123123, 1123, 112, 2, 22, 2, 3, 56, 78, 999,
  88, 665, 4, 33, 44534, 234, 34, 2, 3, 4, 5, 634, 4, 5, 345, 6, 123, 7, 34, 5,
  345, 3465, 34, 534, 5, 345, 34, 53, 45, 345, 34, 534, 5,
];

//retorna el porcentaje de numeros pares e impares
const getEvenOddPercentage = () => {
  const arrayEven = array.filter((val) => val % 2 === 0);
  const arrayOdd = array.filter((val) => val % 2 !== 0);

  const percentageEven = (arrayEven.length / array.length) * 100;
  const percentageOdd = (arrayOdd.length / array.length) * 100;

  return { percentageEven, percentageOdd };
};

//retorna el porcentaje de numeros mayores a 1000
const getGreaters1000Percentage = () => {
  const numbersGreatersThan1000 = array.filter((val) => val > 1000);

  const percentaje = (numbersGreatersThan1000.length / array.length) * 100;

  return percentaje;
};

//Mayor y menor valor del arreglo
const hightestValue = Math.max(...array);
const lowestValue = Math.min(...array);

//Porcentaje del numero minimo
const minNumPercentage = (lowestValue / hightestValue) * 100;

//Porcentaje del promedio de todos los numeros
const average =
  (array.reduce((a, b) => a + b, 0) / array.length / hightestValue) * 100;

//Impresion en consola
console.log("Cantidad de elementos del arreglo:", array.length);
console.log(
  "Porcentaje de números pares:",
  getEvenOddPercentage().percentageEven,
  "%"
);
console.log(
  "Porcentaje de números impares:",
  getEvenOddPercentage().percentageOdd,
  "%"
);
console.log(
  "Porcentaje de números mayores a 1000:",
  getGreaters1000Percentage(),
  "%"
);

console.log("Mayor valor:", hightestValue);
console.log("Menor valor:", lowestValue);

console.log("Porcentaje del número mínimo:", minNumPercentage.toFixed(5));
console.log(
  "Porcentaje del promedio de todos los números:",
  average.toFixed(5)
);
