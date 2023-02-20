// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

// function findMaximumPieces(n) { 
//         return 1 + n * (n + 1) / 2; 
// } 

// let valor = gets() 

let qtdCortes = parseInt(gets());



function maxQtdCortes(a){

  let b = a - 1;

if(a != 0 && a <= 2){

return a * 2;

  }

else if (a > 2){

return maxQtdCortes(b) + a;

}

}



console.log(maxQtdCortes(qtdCortes));