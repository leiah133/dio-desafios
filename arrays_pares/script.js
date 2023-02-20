// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// - "array.length": verifica o tamanho de um array;

// var array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];

// //TODO: Complete o laço de repetição:
// for (i <= array.length){
// //TODO: Agora crie uma condição que verifique o ARRAY e imprima APENAS os números pares.
// }
var array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];

for (let i = 0; i <= array.length - 1; i++){
pares = array.filter(value => value % 2 == 0);
if (i <= pares.length - 1){
console.log(pares[i]);
}
}