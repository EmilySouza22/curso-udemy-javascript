/*
    Closure

    - É uma função que se lembra do ambiente em que ela foi criada
*/

function armazenarSoma(x) {
	return (y) => x + y;
}
let soma1 = armazenarSoma(3);
/**
 function armazenarSoma(3){
    return y => 3 + y;
}
    soma1 = (y) => 3 + y;

    soma1(5) 
        --> (y) => 3 + y
        --> (5) => 3 + 5 
        --> 3 + 5 == 8

*/
console.log(soma1(5));
let soma2 = armazenarSoma(5);
console.log(soma2(10));

/* Exemplo 2 */
function contador(i) {
	let cont = i;
	let somarContador = function () {
		console.log(cont);
		cont++;
	};
	return somarContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
