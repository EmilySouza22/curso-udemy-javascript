/* 
    Destructuring com objetos

    - Podemos definir variáveis com propriedades do objeto com uma notação diferente, chamada destructuring
*/

/* Exemplo 1 */
const person = {
	name: 'Jhon',
	lastname: 'Doe',
};

const { name: fname, lastname: lname } = person;
console.log(fname);
console.log(lname);

/* Exemplo 2 */

let carro = {
	rodas: 4,
	portas: 2,
	tetosolar: false,
	motor: '2.0',
};

const {
	rodas: qRodas,
	portas: qPortas,
	tetosolar: temTeto,
	motor: tipoMotor,
} = carro;

console.log(qRodas);
console.log(qPortas);
console.log(temTeto);
console.log(tipoMotor);

/* 
    Destructuring com arrays

    - Podemos definir variáveis com os valores de um array utilizando o destructuring
*/

/* Exemplo 1 */
let nomes = ['Matheus', 'João', 'Pedro'];
let [nomeA, nomeB, nomeC] = nomes;

console.log(nomeA);
console.log(nomeB);
console.log(nomeC);

/* Exemplo 2 */
let numeros = [2, 4, 5, 8];
let [num1, num2, num3, num4] = numeros;

console.log(num1);
console.log(num3);
