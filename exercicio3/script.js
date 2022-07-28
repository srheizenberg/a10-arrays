/*
# Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
*/
//aqui e o array original.
const nomeDoArrayOriginalCopia = [10, 95, 2, 15, -20, 100];

//aqui e o array copy do original.
const nomeDoArrayOriginalCopia1 = nomeDoArrayOriginalCopia.slice();
nomeDoArrayOriginalCopia1.push(Number);

console.log(nomeDoArrayOriginalCopia);
console.log(nomeDoArrayOriginalCopia1);

//aqui e o array original
const nomeDoArrayOriginalCopiaStrings = ['teclado', 'mouser', 'números', 'games', 'ilha'];
//clone do array original
const nomeDoArrayOriginalCopiaStrings1 = nomeDoArrayOriginalCopiaStrings.slice().splice(0, 4);

console.log(nomeDoArrayOriginalCopiaStrings);
console.log(nomeDoArrayOriginalCopiaStrings1);


//aqui e o array original
const nomeDoArrayOriginalCopiaMista = [10, 5, 7, 18, 56, 'caderno', 'luva', 'pedreiro', 'ronaldo', true, false];
//aqui e o clone do array original.
const nomeDoArrayOriginalCopiaMista1 = nomeDoArrayOriginalCopiaMista.slice().splice(2, 11, "10");

console.log(nomeDoArrayOriginalCopiaMista);
console.log(nomeDoArrayOriginalCopiaMista1);