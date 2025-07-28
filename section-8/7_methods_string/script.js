/*
    Métodos de string: trim

    - Remove tudo que não é string
*/

/* Exemplo 1 */
let texto = '\n teste \n';
console.log(texto); //com quebra linha
console.log(texto.trim()); //sem quebra linha, só o 'teste'

/* Exemplo 2 */
let nome = '   Emily';
// Olá   Emily, tudo bem?

let nomeCorrigido = nome.trim();
console.log(nome);
console.log(nomeCorrigido);

//Consegue tirar caracter especiais como o '\n' e os espaços da string

/*
    Métodos de string: padStart

    - Inserir caracteres antes da string
*/

/* Exemplo 1 */
let milAoContrario = '1';
console.log(milAoContrario.padStart(4, '0'));

/* Exemplo 2 */
let sku = '34';
console.log(sku.padStart(6, '0'));

let sku2 = '7348';
console.log(sku2.padStart(6, '0'));

//Usado pra padronizar codigos de produtos como em sites de e-commerce ou lojas

/*
    Métodos de string: split

    - Divide uma string por um separador, e retorna um array
*/

/* Exemplo 1 */
let frase = 'O rato roeu a roupa do rei de roma';
let palavras = frase.split(' ');
console.log(palavras);

/* Exemplo 2 */
let produtos = 'Banana;Maçã;Jaca;Pera;Bola;Tapete';
let produtosSeparados = produtos.split(';');
console.log(produtosSeparados);

/*
    Métodos de string: join

    - Junta elementos em um array em uma frase, por meio de um separador
*/

/* Exemplo 1 */
let fraseMontada = palavras.join('...');
console.log(fraseMontada);

/* Exemplo 2 */
let mensagem = 'Testando o método split';
let palavras2 = mensagem.split(' ');

let novaMensagem = palavras2.join('@');
console.log(novaMensagem);

console.log(palavras2.join(' '));

/*
    Métodos de string: repeat

    - Repete uma string de acordo com um parâmetro number
*/

/* Exemplo 1 */
console.log('teste '.repeat(5));

/* Exemplo 2 */
let palavra = '\n Repetir a frase ';
console.log(palavra.repeat(20));
