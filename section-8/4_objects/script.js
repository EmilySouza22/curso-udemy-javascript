/* 
    Objetos 

    Uma coleção de propriedades, parecidos com arrays
    Podemos acessar estas propriedades
*/

/* Exemplo 1 */
let pessoa = {
	nome: 'Fernanda',
	profissao: 'Programadora',
	idade: 23,
};
console.log(pessoa.nome);
console.log(pessoa.idade);

/* Exemplo 2 */
let cachorro = {
	patas: 4,
	nome: 'Bob',
	latir: function () {
		console.log('Au Au');
	},
};

//acessando propried. de cachorro
console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();

/*
    Objetos: deletando e criando propriedades

    Podemos adicionar e deletar propriedades ao longo do nosso programa
*/

/* Exemplo 1 */
let carro = {
	marca: 'bmw',
	portas: 4,
	eletrico: false,
	motor: 1.0,
};

console.log(carro.portas);
delete carro.portas;
console.log(carro.portas);

carro.tetoSolar = true;
console.log(carro.tetoSolar);

console.log(carro);

/* Exemplo 2 */
let usuario = {
	nome: 'Emily',
	idade: 20,
	profissao: 'Dev',
};

console.log(usuario.nome);
delete usuario.nome;
console.log(usuario.nome);
console.log(usuario);

/* 
    Objeto: mais sobre objetos

    Podemos copiar todas as propriedades de um obj pra outro
*/

/* Exemplo 1 */
let objetoA = {
	prop1: 'teste',
	prop2: 'testando',
};

let objetoB = {
	prop3: 'propriedade',
};

Object.assign(objetoA, objetoB); //ele puxa a prop3 de objetoB para o objetoA e coloca ao final
console.log(objetoA); //objetoA mudou, agora contém prop3
console.log(objetoB); //objetoB não mudou, continua igual

/* Exemplo 2 */
let gato = {
	nome: 'Nina',
	cor: 'Preta',
	patas: 4,
	olhos: 'verdes',
};

let acoes = {
	dormindo: true,
	comendo: false,
	ronronando: true,
};

Object.assign(gato, acoes);
console.log(gato);

/*
    Mais sobre objetos

    - Também podemos verificar quais as chaves cada objeto possui com Object.keys()
*/

/* Exemplo 1 */
let objeto1 = {
	prop1: 'teste',
	prop2: 'testando',
};

console.log(Object.keys(objeto1));

//chaves de objeto1: prop1 e prop2
//valores de objeto1: 'teste' e 'testando'

/* Exemplo 2 */
let obj = {
	chave1: 1,
	chave2: 2,
	chave3: 3,
};

console.log(obj);
console.log(Object.keys(obj));

/* Além de vermos as chaves do objeto podemos também ver apenas os valores com Object.values() */

console.log(Object.values(objeto1));
console.log(Object.values(obj));

/*
    Mutação (Mutability)

    - Um objeto pode herdar todas as características do outro, virando uma referência ao mesmo;
*/

/* Exemplo 1 */
let objetoD = {
	pontos: 10,
};

let objetoE = objetoD;

let objetoF = {
	pontos: 10,
};
console.log(objetoD == objetoE); //true (é igual)
console.log(objetoD == objetoF); //false (é idêntico mas não é igual)

/* Exemplo 2 */
let mulher = {
	nome: 'Emily',
};

let mulher2 = mulher;

console.log(mulher); //{ nome: 'Emily' }
console.log(mulher2); //{ nome: 'Emily' }
console.log(mulher == mulher2); //true

mulher2.nome = 'Emilie'; //Irá alterar os dois, pois um é referência do outro

console.log(mulher);
console.log(mulher2);
