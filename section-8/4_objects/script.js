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
