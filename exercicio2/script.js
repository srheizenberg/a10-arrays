/*
# Exercício 2

Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
*/


const arrayNumeros = [10, 95, 2, 15, -20, 100];
console.log(arrayNumeros);

const arrayStrings = ['teclado', 'mouser', 'números', 'games', 'ilha'];
console.log(arrayStrings);

const arrayMista = [10, 5, 7, 18, 56, 'caderno', 'luva', 'pedreiro', 'ronaldo', true, false];
console.log(arrayMista);


console.log(arrayNumeros.length);

console.log(arrayStrings.length);

console.log(arrayMista.length);

console.log(arrayNumeros[0]);
console.log(arrayStrings[1]);
console.log(arrayMista[2]);


arrayNumeros.push(1);
console.log(arrayNumeros.includes(1));

console.log(arrayNumeros.includes(-19));