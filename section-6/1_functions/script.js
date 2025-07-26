/* Seção 6: Funções */

/*
    O que são funções?

    - Funções são estruturas de códigos menores que são 
    reaproveitadas durante a execução de um programa
    - Principal Objetivo: poupar repetição de código
    - Poder ser consideradas 'subprogramas'
*/

/*
    Definindo uma função

    - Uma função tem uma estrutura um pouco mais complexa
    - Devemos declarar a função com a palavra function
    - Uma função deve conter seu nome
    - Pode conter argumentos definidos entre ()
    - O corpo da função é definido em {}
    - Geralmente uma função retorna um valor
    - É possível declarar funções em variáveis
*/

//Definindo uma função
function escreverNoConsole() {
	console.log('Escrevendo no console!');
}
escreverNoConsole();

const textoNoConsole = function () {
	console.log('Texto no console');
};
textoNoConsole();

const textPorParametro = function (texto) {
	console.log(texto);
};
textPorParametro('Eu escrevi isso ebaaa');

//Imprimindo um número aleatório
const numeroAleatorio = function () {
	console.log('Número Aleatório:', Math.random() * 10);
};
numeroAleatorio();

//Mais sobre funções
function multiplicarTresNumeros(x, y, z) {
	return x * y * z;
}
console.log(multiplicarTresNumeros(2, 3, 100));
const mult = multiplicarTresNumeros(4, 5, 8);
console.log(`O valor de mult é ${mult}`);

//Função para dirigir
function podeDirigir(idade, cnh) {
	if (idade >= 18 && cnh === true) {
		console.log('Pode dirigir');
	} else {
		console.log('Não pode dirigir');
	}
}
console.log(podeDirigir(19, true));
console.log(podeDirigir(25, true));
console.log(podeDirigir(44, 0));
console.log(podeDirigir(19, 1));
console.log(podeDirigir(17, false));

/* 
    Escopo de uma função 
    
    - O que acontece dentro de uma função fica separado do escopo global
    - O escopo global seria todo o arquivo de Javascript
*/

/* Exemplo 1 */
let n = 10;
const numero = function () {
	let n = 25;
	console.log(n);
};
console.log(n);
//As duas variáveis 'n' estão em escopos diferentes, é por isso que não retorna um erro.

/* Exemplo 2 */
let y = 10;
function imprimir() {
	let y = 150;
	console.log(`Escopo da função: ${y}`);
}
imprimir();
console.log(`Escopo Global: ${y}`);
