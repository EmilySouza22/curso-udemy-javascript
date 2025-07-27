/*
    Loops em arrays

    - Uma técnica muito utilizada na programação é o loop nos arrays
    - Como é uma lista com muitos valores, muitas vezes precisamos ver cada um deles
*/

/* Exemplo 1 */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
	console.log(numeros[i]);
}

/* Exemplo 2 */
let nomes = ['Matheus', 'Maria', 'José'];

for (let i = 0; i < nomes.length; i++) {
	console.log(nomes[i]);
}

/* Exemplo 3 */
let bichos = ['gato', 'papagaio', 'hamster', 'capivara'];
for (let i = 0; i < bichos.length; i++) {
	console.log(bichos[i]);
}

/* Exemplo 4 */
let planetas = ['Mercúrio', 'Vênus', 'Saturno', 'Netuno'];
let i = 0;
while (i < planetas.length) {
	console.log(planetas[i]);
	i++;
}
