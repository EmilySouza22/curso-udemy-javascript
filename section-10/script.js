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

let cachorro = {
    latir: function(){
        console.log("Au au");
    }
}

cachorro.latir();

const cachorro2 = {
    uivar: function(){
        console.log('Auuuuuuuuuuuuu')
    },
    rosnar: function(){
        console.log('Ggrrrrrrrrrr')
    }
}

console.log(cachorro2.uivar());
console.log(cachorro2.rosnar());