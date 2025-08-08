/* Section 10: Conceitos de orientação a objetos */

/* 
    O que é a orientação a objetos?

    - Uma forma de programar, que utiliza os objetos como o seu principal princípio;
    - Além de utilizar conceitos e técnicas que envolvem objetos;
    - A maioria dos softwares, na parte de back-end, são desenvolvidos em cima desse paradigma;
    - Grandes frameworks se aproveitam desta técnica: Laravel, Django e etc;
*/

/* 
    Métodos

    - Propriedade que servem como funções;
    - Ou seja, as ações dos objetos;
    - Invocamos os métodos da mesma maneira que funções;
*/

/* Exemplo 1 */

let cachorro = {
	latir: function () {
		console.log('Au au');
	},
};

cachorro.latir();

/* Exemplo 2 */

const cachorro2 = {
	uivar: function () {
		console.log('Auuuuuuuuuuuuu');
	},
	rosnar: function () {
		console.log('Ggrrrrrrrrrr');
	},
};

console.log(cachorro2.uivar());
console.log(cachorro2.rosnar());

/* 
    Mais sobre métodos

    - Normalmente os métodos interagem com os objetos;
    - Até mundando os valores das suas propriedades para corresponder a lógica do programa desenvolvido;
*/

/* Exemplo 1 */

const pessoa = {
	nome: 'Emilie',
	setNome: function (novoNome) {
		this.nome = novoNome;
	},
	getNome: function () {
		return this.nome;
	},
};

console.log(pessoa.getNome());

pessoa.setNome('Emily');

console.log(pessoa.getNome());
