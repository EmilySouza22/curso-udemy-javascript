/*
    13 - Criando array e identificando elementos

    Crie uma variável qty, ela deve ter a quantidade de elementos do array (use length para identificar);
    Crie uma variável chamada el com o valor do terceiro elemento do array; 
*/

const arr = [1, 2, 3, 4];

let qty = arr.length;
console.log(qty);

let el = arr[2];
console.log(el);

/*
    14 - Preenchendo array

    Insira 5 elementos na variável arr;
    Os elementos devem ser um número, somando o iterador mais 5;
    O iterador é a variável temporária que controla o loop;
*/

const arr2 = [0, 1, 2, 3, 4];

for (let i = 0; i < arr2.length; i++) {
	arr2[i] = arr2[i] + 5;
}

console.log(arr2);

/*
    15 - Encontrar o maior número em um array

    Crie uma função chamada findMaxNumber que recebe como parâmetro um array de números.
    A função deve retornar o maior número presente no array.
*/

const arr3 = [0, 1, 10, 11, 100, 101, 110, 111];
function findMaxNumber(arr) {
	let num = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > num) {
			num = arr[i];
		}
	}
	return num;
}

console.log(findMaxNumber(arr3));

/*
    16 - Soma de Números Únicos

    Escreva uma função chamada sumUniqueNumbers que recebe um array de números como argumento.
    A função deve calcular e retornar a soma de todos os números que aparecem apenas uma vez no array.
    Utilize uma estrutura de dados auxiliar para armazenar a contagem de cada número no array.
    Percorra o array e verifique se cada número ocorre apenas uma vez. Se sim, some-o à variável de soma.
    Considere que o array pode conter tanto números inteiros positivos quanto negativos.
*/

let arr4 = [0, 1, 2, 3, 4, 2, 0, -2];

function sumUniqueNumbers(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
			sum += arr[i];
		}
	}
	return sum;
}

console.log(sumUniqueNumbers(arr4));

/*
    17 - Remover elementos duplicados de um array

    Crie uma função chamada removeDuplicates que recebe como parâmetro um array de elementos.
    A função deve remover os elementos duplicados do array, mantendo apenas as ocorrências únicas.
*/

let arr5 = [1, 1, 2, 2, 3, 3, 4, 4, 1];

function removeDuplicates(arr) {
	return [...new Set(arr)];
}

console.log(removeDuplicates(arr5));
