/* 
    Mais sobre escopo 

    - Atualmente com let e const, qualquer bloco de código 
    pode separar seu escopo (como um if por exemplo)
    - Isso é muito bom pois separa os contextos, com var isso não acontecia
    - Ou seja, podemos ter escopos diferentes não só com funções
*/

/* Exemplo 1 */
let x = 10;
if (true) {
	let x = 20;
	x++;
	console.log(x); //escopo if
}
console.log(x); //escopo global

/* 
    Escopo aninhado 

    - Por causa da possibilidade de criar um escopo, podemos ter mais níveis de escopo
*/

/* Exemplo 1 */
let y = 5;
const multiplicar = function (n) {
	let y = n * 2;
	console.log(y);
	if (y == 10) {
		let y = 55;
		console.log(y);
	}
};
multiplicar(y);

/* Exemplo 2 */
let a = 10; // ----> escopo global

function somar(x, y) {
	let a = x + y; // ----> escopo da função
	console.log(a);

	if (a > 8) {
		let a = 0; // ----> escopo do if
		a++;
		console.log(a);
	}
}
somar(a, a);
somar(3,8)
