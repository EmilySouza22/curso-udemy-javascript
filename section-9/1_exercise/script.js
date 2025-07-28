/* Section 9: Exercícios sobre arrays e objetos */

/* 
    Exercício 1

    Crie um array com 5 itens;
    Acesse o item 1,3,4;
*/

const arr = ['camiseta', 'calça', 'saia', 'bota', 'meia'];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);

/* 
    Exercício 2

    Crie um array com 2 elementos e outro 4;
    Imprima o número de elementos de cada um na tela;
*/

const objetosCozinha = ['faca', 'garrafa'];
const objetosSala = ['tv', 'sofá', 'controle', 'quadro'];

console.log(objetosCozinha.length);
console.log(objetosSala.length);

/* 
    Exercício 3

    Crie um objeto onibus;
    Com as propriedades rodas = 8;
    Limite de passageitos = 40;
    Portas = 2;
    Imprima todas as propriedades no console;
*/

let onibus = {
	rodas: 8,
	limitePassageiros: 40,
	portas: 2,
};

console.log(onibus.rodas);
console.log(onibus.limitePassageiros);
console.log(onibus.portas);

/* 
    Exercício 4

    Adicione a propriedade janelas no ônibus, com o valor de 20;
    Delete a propriedade rodas;
    Imprima a propriedade janelas no console;
*/

onibus.janelas = 20;
delete onibus.rodas;

console.log(onibus.janelas);
console.log(onibus.rodas);

console.log(onibus);

/* 
    Exercício 5

    Crie um array com 5 nomes, incluindo o seu;
    Verifique se o seu nome existe no array;
    Se existir imprima alguma mensagem no console;
*/

const nomes = ['Gustavo', 'Emily', 'Alice', 'Ana', 'Bob'];

if (nomes.includes('Emily')) {
	console.log('Seu nome consta na lista!');
}

/* 
    Exercício 6

    Crie dois arrays, um com mais de 5 elementos e outro com menos;
    Faça uma função que verifica o número de elementos;
    Se possuir menos que 5, imprima 'Poucos elementos' no console;
    Se tiver mais, imprima 'Muitos elementos';
*/

let produtosPadaria = ['bombom', 'pão', 'bolo', 'torta', 'pudim'];
let produtosLimpeza = ['detergente', 'vassoura'];

function quantidadeProdutos(arr) {
	if (arr.length < 5) {
		return 'Poucos elementos';
	} else {
		return 'Muitos elementos';
	}
}

console.log(quantidadeProdutos(produtosPadaria));
console.log(quantidadeProdutos(produtosLimpeza));

/* 
    Exercício 7

    Crie um array com 5 elementos;
    Faça uma iteração entre todos eles e imprima no console o valor;
*/

let obj = ['coffee', 'poster', 'pc', 'pin', 'sticker'];
for (let i = 0; i < obj.length; i++) {
	console.log(obj[i]);
}

/* 
    Exercício 8

    Crie um JSON com 3 propriedades
    Atribua a ele a uma variável
    Acesse as propriedades imprimindo no console
*/

const objectJson = {
	prop1: 1,
	prop2: 2,
	prop3: 3,
};

console.log(objectJson.prop1);
console.log(objectJson.prop2);
console.log(objectJson.prop3);

/* 
    Exercício 9

    Crie um array a partir de uma frase;
    Imprima cada palavra do array no console por meio de um for;
*/

let frase = 'Minha gata Nina está deitada no meu colo';
let array = frase.split(' ');

for (let i = 0; array.length > i; i++) {
	console.log(array[i]);
}

/*
    Exercício 10 - Desafio Calculadora

    Crie um objeto calculadora
    Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir
    Os métodos só devem aceitar dois parâmetros
    Utilize cada um dos métodos e imprima os valores no console
*/

let calculadora = {
	soma(a, b) {
		return a + b;
	},
	subtrair(a, b) {
		return a - b;
	},
	multiplicar(a, b) {
		return a * b;
	},
	dividir(a, b) {
		return a / b;
	},
};

console.log(calculadora.soma(5, 5));
console.log(calculadora.subtrair(5, 5));
console.log(calculadora.multiplicar(5, 5));
console.log(calculadora.dividir(5, 5));
