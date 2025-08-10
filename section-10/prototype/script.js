/* 
    Prototype

    - Um objeto fallback de outro objeto;
    - Quando um objeto recebe uma requisição de uma propriedade que não tem, ela é procura no prototype deste objeto;
    - O prototype de um objeto criado do zero é o Objetct, que tem os métodos nativos da linguagem
*/

/* Exemplo 1 */
let pessoa = {
	maos: 2,
};

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));
console.log(pessoa.hasOwnProperty('pes'));

/* 
    Mais sobre Prototype

    - Quando criamos um objeto a partir de um outro, o base será o prototype;
    - Ele herdará tanto os métodos e propriedades de Object (o prototype do objeto base)
    - Quanto os do objeto base para este novo;
*/

/* Exemplo 2 */

let pessoa2 = {
	maos: 2,
};

let pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);
console.log(Object.getPrototypeOf(pessoaNova) == pessoa2);

console.log(pessoaNova.hasOwnProperty('maos'));
