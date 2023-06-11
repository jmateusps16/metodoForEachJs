
// FUNCTION EXPRESSION
const essaPalavraEUmPalindromo = function(palavra) {
  if (palavra != null && palavra.trim() != "") {
    var separandoAsLetrasDaPalavra = palavra.split("");
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
    palavra == palavraInvertida ? console.log('A palavra digitada ' + palavra + ' é um palindromo!') : console.log('A palavra digitada ' + palavra + ' não é um palindromo, seu inverso é: '+ palavraInvertida);
  } else {
    console.error("Palavra vazia");
  }
}

var palavra = "";
essaPalavraEUmPalindromo(palavra);

// ------------------------------------------
// FUNCTION DECLARATION
//É POSSIVEL FAZER HOLISTING, 
essaPalavraEUmPalindromo()

function essaPalavraEUmPalindromo() {
  var palavra = "saco";
  var separandoAsLetrasDaPalavra = palavra.split("");
  var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
  palavraInvertida = palavraInvertida.join("");
  palavra == palavraInvertida ? console.log('A palavra digitada ' + palavra + ' é um palindromo!') : console.log('A palavra digitada ' + palavra + ' não é um palindromo, seu inverso é: '+ palavraInvertida);
}
