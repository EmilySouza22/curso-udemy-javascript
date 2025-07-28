/*
    Rest Operator

    - Uma forma de uma função receber indefinidos parâmetros
    - O operador rest vai virar um array
    - O parâmtro é definido por: ...nome
*/

/* Exemplo 1 */
function imprimindoNumeros(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
}

imprimindoNumeros(2, 22, 1, 3);

/* Exemplo 2 */
let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
}

console.log('------------------>');
imprimirNumeros(num, num1, num2);
console.log('------------------>');
imprimirNumeros(num2, num3);
console.log('------------------>');
imprimirNumeros(2, 6, 7, 8, 9, 5, 2, 6, 7, 4, 2, 3);
