
/*
Retorne o número de vogais no texto fornecido.
Consideraremos a, e, i, o e u como vogais para este kata.
O texto de entrada terá apenas letras minusculas e/ou
 espaços.
Letras acentuadas não fazem parte deste desafio.
*/


function contarVogais(texto) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;

  for (let letra of texto) {
    if (vogais.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

// Exemplo de uso:
const texto = "este é um exemplo simples";
console.log(contarVogais(texto)); 
