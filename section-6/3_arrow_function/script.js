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
let soma = (a, b) => {
	return a + b;
};
console.log(soma(2, 3));

/* 
    Mais sobre arrow functions 

    - Se só tem um parâmetro podemos remover os parênteses do argumento e o return
    - Se a expressão for pequena, pode até ser feita em uma linha sem prejudicar o código
*/

/* Exemplo 1 */
const raizQuadrada = (x) => {
	return x * x;
};
console.log(raizQuadrada(2));

const raizQuadrada2 = (n) => n * n; // ----> Mais simplificada
console.log(raizQuadrada2(4));

/* Exemplo 2 */
const multiplicarPorDois = (x) => {
	return x * 2;
};
console.log(multiplicarPorDois(2));

//Quando houver apenas um parâmetro podemos simplificar dessa forma
const multiplicarPorDois2 = (x) => x * 2;
console.log(multiplicarPorDois2(4));
//Obs: sempre prezar pela legibilidade do código :)

/* 
    Argumentos Opcionais
    
    - Podemos chamar uma função em JS sem o número igual de parâmetros determinados
*/

/* Exemplo 1 */
function nomeComIdade(nome, idade) {
	if (idade === undefined) {
		console.log('Seu nome é ' + nome);
	} else {
		console.log('Seu nome é ' + nome + ' e sua idade é ' + idade);
	}
}
nomeComIdade('João');
nomeComIdade('João', 45);

/* Exemplo 2 */
function soma2(a, b) {
	if (a === undefined || b === undefined) {
		console.log('Essa função precisa ter os dois argumentos!');
	} else {
		console.log(a + b);
	}
}
soma2(2);
soma2(2, 5);
soma2(5, 5);

/* 
    Argumentos com valor default

    - Podemos pre-determinar um valor para um argumento
    - Então se o usuário não passar o argumento, será tomado o valor pré-definido
*/

/* Exemplo 1 */
function repetirFrase(frase, n = 2) {
	for (let x = 1; x <= n; x++) {
		console.log(`${frase} ${x}`);
	}
}
repetirFrase('Testando', 5);
repetirFrase('Legal!');

/* Exemplo 2 */
function potencia(base, exp = 2) {
	return Math.pow(base, exp);
}
console.log(potencia(2));
console.log(potencia(2, 2));
console.log(potencia(2, 3));
