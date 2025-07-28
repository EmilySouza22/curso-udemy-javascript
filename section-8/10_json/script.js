/*
    JSON

    - JSON = JavaScript Object Notation
    - Utilizado para comunicação entre serviços, ex: backend <-> frontend
    - Basicamente um tipo de dado padronizado, que lembra muito os objetos do JavaScript
*/

/* Exemplo 1 */
const profissional = {
	name: 'Matheus',
	age: 29,
	position: 'Developer',
	languages: ['PHP', 'JavaScript', 'Python'],
};

let pessoa = {
	nome: 'Matheus',
	idade: 25,
};

console.log(pessoa.nome);
console.log(pessoa.idade);

//Podemos também receber arquivos em JSON e transformar esses arquivos em dados
//Empregar ou receber dados

/* 
    Mais sobre JSON

    - Rigoroso na estrutura, ou seja, você deve seguir o padrão imposto por este formato
    - Apenas aspas duplas
    - Não aceita comentários
*/

/* 
    Convertendo JSON para String

    - Podemos converter o JSON para uma string de forma fácil
    - Ou também uma string para JSON
*/

/* Exemplo 1 */
const car = {
	brand: 'BMW',
	wheels: 4,
	doors: 2,
	type: 'Sedan',
};

let jsonToString = JSON.stringify(car);
console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson);

/* Exemplo 2 */
let usuario = {
	nome: 'Emily',
	idade: 20,
	profissao: 'dev',
	hobbies: ['Video Game', 'Codar', 'Estudar'],
};

//string
let usuarioTexto = JSON.stringify(usuario);
console.log(usuarioTexto);

//json
let usuarioNormal = JSON.parse(usuarioTexto);
console.log(usuarioNormal);