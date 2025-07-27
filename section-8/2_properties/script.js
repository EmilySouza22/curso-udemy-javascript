/* 
    Propriedades

    Propriedades são informações que podem ser verificadas de um valor
    Quase todos os valores de JavaScript tem propriedades, menos null e undefined
    Podemos acessar as propriedades de duas maneiras
*/

/* Exemplo 1 */

let numeros = [1, 3, 5, 8, 12];

console.log(numeros.length); //length é uma propriedade de string e de array
console.log(numeros['length']);
console.log(numeros[3]); //o indice é considerado propriedade

let nome = 'Matheus';
console.log(nome.length);