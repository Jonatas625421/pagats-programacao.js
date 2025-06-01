/*
Crie uma função que pegue uma lista de inteiros e Strings
e retorna uma nova lista sem as Strings
*/

function removerStrings(lista) {
    return lista.filter(item => typeof item === 'number');
  }
  
  const listaMista = [10, "texto", 25, "banana", 42];
  const somenteNumeros = removerStrings(listaMista);
  
  console.log(somenteNumeros); // Saída: [10, 25, 42]
  


 
 
  