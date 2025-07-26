/* 
    Arrow functions 

    - Uma outra forma de escrever funções
    - Bem utilizada nos frameworks modernos
    - Porém não deve substituir as functions por completo
*/

/* Exemplo 1 */
const parOuImpar = (n) => {
	return n % 2;
};
console.log(parOuImpar(3));

/* Exemplo 2 */
let consoleTeste = () => {
	return console.log('Olá mundo!');
};
consoleTeste();

/* Exemplo 3 */
let soma = (a,b) => {
    return a + b;
}
console.log(soma(2,3));

/* 
    Mais sobre arrow functions 

    - Se só tem um parâmetro podemos remover os parênteses do argumento e o return
    - Se a expressão for pequena, pode até ser feita em uma linha sem prejudicar o código
*/

/* Exemplo 1 */
const raizQuadrada = (x) => {
    return x * x;
}
console.log(raizQuadrada(2));

const raizQuadrada2 = n => n * n; // ----> Mais simplificada
console.log(raizQuadrada2(4));

/* Exemplo 2 */
