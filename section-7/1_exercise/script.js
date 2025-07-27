/* Seção 7: Exercícios sobre funções */

/* 
    Exercício 1

    Escreva uma função que imprime 'Hello World' no console
*/

function helloWorld() {
	console.log(`Hello World!`);
}

helloWorld();

/* 
    Exercício 2

    Escreva uma função que receba um parâmetro de idade
    E imprima esta mensagem no console com template literals dizendo 'Você tem x anos'
*/

function idadeUsuario(idade) {
	console.log(`Você tem ${idade} anos`);
}

idadeUsuario(20);
idadeUsuario(22);

/* 
    Exercício 3

    Escreva uma função que some dois números e retorne eles
    Depois imprima este retorno
*/

function somandoDoisNumeros(a, b) {
	return a + b;
}

console.log(somandoDoisNumeros(2, 3));

/* 
    Exercício 4

    Escreva uma função que retorne um número aleatório
    O número máximo retornado deve ser passado via parâmetro
    Dica: utilize Math.random()
*/

function retornaNumeroAleatorio(max) {
	return Math.floor(Math.random() * max);
}

console.log(retornaNumeroAleatorio(22));

/* 
    Exercício 5

    Escreva uma função que recebe a idade de uma pessoa
    Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima uma mensagem informando isso
    Se ela tem menos, ela não pode, imprima outra mensagem com este aviso
    Execute a função nos dois casos
*/

function podeFazerAutoEscola(idade) {
	if (idade >= 18) {
		console.log(`Você tem ${idade}, pode entrar na auto escola!`);
	} else {
		console.log(`Você tem ${idade}, não pode entrar na auto escola ainda!`);
	}
}
podeFazerAutoEscola(18);
podeFazerAutoEscola(30);
podeFazerAutoEscola(12);

/* 
    Exercício 6

    Escreva uma função que detecta o tipo de dado passado
    Verifique se é um: number, boolean ou string
    E retorne uma mensagem para cada tipo
    Execute uma função para cada caso
*/

function tipoDados(dados) {
	if (typeof dados == 'string') {
		console.log(`${dados} é uma string`);
	} else if (typeof dados == 'number') {
		console.log(`${dados} é um number`);
	} else if (typeof dados == 'boolean') {
		console.log(`${dados} é um booleano`);
	} else {
		console.log(`${dados} é undefined`);
	}
}

tipoDados(3);
tipoDados('hehe');
tipoDados(true);
tipoDados(undefined);

/* 
    Exercício 7

    Escreva uma função que receba um número negativo e retorne um número positivo
    Dica: utilize a função Math.abs
*/

const retornaNumeroPositivo = (num) => Math.abs(num);

console.log(retornaNumeroPositivo(-8));
console.log(retornaNumeroPositivo(0));
console.log(retornaNumeroPositivo(-65));
console.log(retornaNumeroPositivo(-22.5));

/* 
    Exercício 8

    Escreva uma função que receba uma string
    Se o texto conter mais de 10 caracteres imprima "Texto muito longo"
    Se conter menos, imprima "Texto dentro do limite"
*/

function verificandoTexto(text) {
	if (text.length > 10) {
		console.log('Texto muito longo');
	} else {
		console.log('Texto dentro do limite');
	}
}

verificandoTexto('OOLAAAAAAAAA');
verificandoTexto('olá');

/* 
    Exercício 9

    Escreva uma função que receba dois números, o primeiro é a base e o segundo a potência
    Depois faça essa operação e retorne o resultado
    Por exemplo: 3, 2 = 9
*/

const potenciacao = (base, pot) => Math.pow(base, pot); // pode-se usar também: base ** pot (operador de potencia)

console.log(potenciacao(2, 8));
console.log(potenciacao(3, 11));

/* 
    Exercício 10

    Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop
    Além disso imprima somente os números pares no console
*/

function imprimePar(num) {
	for (; num > 0; num--) {
		if (num % 2 == 0) {
			console.log(num);
		}
	}
}

imprimePar(30);
