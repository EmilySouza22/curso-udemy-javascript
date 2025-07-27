/* 
    6 - Função de soma

    Crie uma função chamada soma que aceita três números como argumentos;
    Retorne a soma dos três números;
    Crie uma variável chamada resultado;
    Ela deve conter o retorno da função, passe os números 5, 10 e 15 como argumento 

*/

function soma(a, b, c) {
	return a + b + c;
}

let resultado = soma(5, 10, 15);
console.log(resultado);

/* 
    7 - Identifique a faixa etária

    Crie uma função chamada faixaEtaria que aceita um argumento chamado idade;
    Identifique três faixas etárias: Criança (menor que 12 anos), Jovem (12 a 24 anos), Adulto (Maior que 25 anos);
    Execute a função duas vezes e encapsule os resultados em variáveis diferentes;
    Uma variável deve ter o nome de crianca e enviar como argumento uma idade de criança;
    A outra o nome adulto e uma idade de adulto para executar a função criada;

*/

function faixaEtaria(idade) {
	if (idade < 12) {
		return 'Criança';
	} else if (idade >= 12 && idade <= 24) {
		return 'Jovem';
	} else {
		return 'Adulto';
	}
}

console.log(faixaEtaria(11));
console.log(faixaEtaria(32));

/* 
    8 - Função de palíndromo

    Escreva uma função chamada isPalindrome que recebe uma palavra como argumento.
    A função deve verificar se a palavra é um palíndromo.
    Um palíndromo é uma palavra que é lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda.
    A função deve retornar true se a palavra for um palíndromo e false caso contrário.

    Por exemplo:
    isPalindrome('radar') deve retornar true.
    isPalindrome('hello') deve retornar false.
*/

function isPalindrome(palavra) {
	let palavraNova = palavra.split('').reverse().join('');
	if (palavraNova === palavra) {
		return true;
	} else {
		return false;
	}
}
console.log(isPalindrome('radar'));
console.log(isPalindrome('hello'));

/* 
    9 - Cálculo da média

    Escreva uma função chamada calculateAverage que recebe um array de números como argumento.
    A função deve calcular a média dos números no array.
    A média é calculada somando todos os números e dividindo pelo total de números no array.
    A função deve retornar o valor da média calculada.
*/

function calculateAverage(array) {
	let soma = 0;
	if (!array.length) {
		return 0;
	}

	for (let i = 0; i < array.length; i++) {
		soma += array[i];
	}

	return soma / array.length;
}

console.log(calculateAverage([2, 3, 4]));
console.log(calculateAverage([10, 10, 10]));
console.log(calculateAverage([98, 84, 90]));

/* 
    10 - Inverter string

    Escreva uma função chamada reverseString que recebe uma string como argumento.
    A função deve inverter a ordem dos caracteres na string.
    A função deve retornar a string invertida.
*/

function reverseString(string) {
	return string.toLowerCase().split('').reverse().join('');
}
console.log(reverseString('Abracadabra'));

/* 
    11 - Contagem de Vogais

    Escreva uma função chamada countVowels que recebe uma string como argumento.
    A função deve contar o número de vogais presentes na string (considerando letras maiúsculas e minúsculas).
    A função deve retornar o total de vogais encontradas.
*/
const charsetVowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(string) {
	let vogais = [];
	let palavra = string.toLowerCase().split('');

	for (let i = 0; i < palavra.length; i++) {
		for (let j = 0; j < charsetVowels.length; j++) {
			if (palavra[i] === charsetVowels[j]) {
				vogais.push(palavra[i]);
			}
		}
	}

	return vogais.length;
}
console.log(countVowels('aeiou'));

/* 
    12 - Soma de Números Pares

    Escreva uma função chamada sumEvenNumbers que recebe um array de números como argumento.
    A função deve calcular e retornar a soma de todos os números pares presentes no array.
    Utilize o operador de módulo (%) para determinar se um número é par.
    Considere que o array pode conter tanto números inteiros positivos quanto negativos.
    Dica: Para verificar se um número é par, você pode usar a expressão numero % 2 === 0, 
    onde % é o operador de módulo que retorna o resto da divisão.
*/

function sumEvenNumbers(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			sum += array[i];
		}
	}

	return sum;
}

console.log(sumEvenNumbers([2, 3, 4, 10, 3, -2]));
