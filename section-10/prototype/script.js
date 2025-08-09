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
