var jogador1 = 1;
var jogador2 = 0;
var placar;

/* //  if ternario
jogador1 != -1 && jogador2 != -1 ? console.log ('os jogadores são válidos') : 
console.log ('jogadores inválidos');

//usando if
if (jogador1 > 0 && jogador2 == 0 ) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}

//usando else if
 else if(jogador2 > 0 && jogador1 == 0) {
    console.log('jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
}
//usando else
else {
    console.log('ninguem marcou ponto');
}

switch (placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
        default:
        console.log('ninguem ganhou');
}
 */

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];

let object = { propridade1: 'valor1', propridade2: 'valor2', propridade3: 'valor3', }

/*  // for executa umainstrução até que ela seja falsa

 for (let indice = 0; indice < array.length; indice++) {
     console.log(indice);
 } */

 // for/in  executa repetição a partir de uma propriedade
 // com array
 for (let i in array){
     console.log(i);
 }

 // com object

 for (i in object) {
     console.log(i);
 }

 