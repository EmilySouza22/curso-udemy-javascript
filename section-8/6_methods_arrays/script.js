/* 
    Métodos de array: push e pop

    push: inserir um elemento no array no fim do array;
    pop: remover um elemento no array no fim do array;
*/

/* Exemplo 1 */
let pessoas = ['Matheus', 'João', 'Ricardo'];

let pessoaRemovida = pessoas.pop();

console.log(pessoas);
console.log(pessoaRemovida);

/* 
    Métodos de array: shift e unshift

    unshift: adiciona um ou mais elementos no início de um array;
    shift: remove o primeiro elemento do array;
*/

/* Exemplo 1 */
let frutas = ['maçã', 'Melão', 'Uva'];
let frutaRemovida = frutas.shift();
console.log(frutas);
console.log(frutaRemovida);

/* Exemplo 2 */
let carros = ['BMW', 'Audi', 'VW', 'Fiat'];
let removerPrimeiroCarro = carros.shift(); //remove bmw

console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift('Gurgel');
console.log(carros);

/* 
    Métodos de array: indexOf e lastIndexOf

    indexOf: encontra o índice de um determinado elemento;
    lastIndexOf: encontrar o último índice de um elemento;
*/

/* Exemplo 1 */
let numeros2 = [0, 1, 2, 1, 0];
console.log(numeros2.indexOf(1));
console.log(numeros2.lastIndexOf(1));

/* Exemplo 2 */
let nums = [5, 6, 2, 4, 9, 6, 2];
console.log(nums.indexOf(2));
console.log(nums.lastIndexOf(2));

/* Exemplo 3 */
let cores = ['laranja', 'rosa', 'vermelho', 'azul', 'rosa', 'lilás', 'azul'];
console.log(`Primeiro índice: ${cores.indexOf('rosa')}`);
console.log(`Último índice: ${cores.lastIndexOf('rosa')}`);

console.log(`Primeiro índice: ${cores.indexOf('azul')}`);
console.log(`Último índice: ${cores.lastIndexOf('azul')}`);

/* 
    Métodos de array: slice

    - Retorna um array a partir de outro array;
    - O array retornado é determinado pelos parâmetros que são os índices de início e fim do novo array;
*/

/* Exemplo 1 */
let numeros = [0, 1, 2, 3, 4, 5];

console.log(numeros.slice(2, 3));
console.log(numeros.slice(3));
console.log(numeros.slice(0, 2));

//slice(inicio, fim);
//É como se fosse > pegue a partir do índice 'início' até antes do índice 'fim' <

/* Exemplo 2 */
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.slice(4, 5));
console.log(numbers.slice(4, 6));

//Pegue o 7 e 8
console.log(numbers.slice(7, 9));
//Pegue os dois ultimos do array
console.log(numbers.slice(-2));
//Pegue do indice 3 sem os dois ultimos
console.log(numbers.slice(3, -2)); //vai tirar o 8 e 9

console.log('------------------>');

/* Exemplo 3 */
let paises = ['Canadá', 'Mongólia', 'Taiwan', 'Austrália', 'Gana', 'Guatemala'];

//2 primeiros
console.log(paises.slice(0, 2));

//2 últimos
console.log(paises.slice(4));

//2 do meio
console.log(paises.slice(2, 4));

//3 primeiros sem os últimos
console.log(paises.slice(0, 3));

//todos sem o primeiro
console.log(paises.slice(1));

//todos sem o ultimo
console.log(paises.slice(0, -1));

//apenas o penultimo
console.log(paises.slice(4, -1));

/* 
    Métodos de array: forEach

    - Itera cada elemento do array;
*/

/* Exemplo 1 */
const nums2 = [1, 2, 3, 4, 5, 6];
nums2.forEach((num) => {
	console.log(num);
});

/* Exemplo 2 */
let nomes = ['Matheus', 'Maria', 'José', 'Pedro', 'João'];

nomes.forEach((nome) => {
	console.log(`O nome é ${nome}`);
});

/* 
    Métodos de array: includes

    - Verifica se o array tem um determinado elemento
*/

/* Exemplo 1 */
let carros2 = ['BMW', 'Fiat', 'Audi'];

console.log(carros2.includes('Fiat')); //true
console.log(carros2.includes('Mercedes')); //false

/* 
    Métodos de array: reverse

    - Inverte um array;
*/

/* Exemplo 1 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.reverse());

/* Exemplo 2 */
let carros3 = ['BMW', 'Fiat', 'VW', 'Renault', 'Audi'];
console.log(carros3.reverse());

/* Exemplo 3 */
let nums3 = [1, 2, 3, 45, 6, 7, 7];
console.log(nums3.reverse());
