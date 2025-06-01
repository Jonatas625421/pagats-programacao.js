
/*
    Calculadora de ração

    Crie um script que receba o peso do dog em Kg + estoque 
    atual de ração em gramas.
    Calcule a quantidade diária de ração com base na seguinte 
    fórmula: Gramas por dia = peso x 30

    Exiba:

    - Nome do Dog
    - Peso
    - Quantidade de ração recomendada por dia
    - Quantos dias o estoque atual vai durar

*/

// Meu código

/*
let nomeDoDog = "Leo"
let pesoKg = 20
let estoqueEmGramas = 5000

const racaoPorDia = pesoKg *30
const diasDeDuracao = Math.floor(estoqueEmGramas / racaoPorDia)

console.log(nomeDoDog)
console.log(pesoKg)
console.log(racaoPorDia)
console.log(diasDeDuracao)
*/

// Código da resolução aula - 1

/*
const nome = 'Mel'
const peso = 10
const estoque = 5000

const gramasPorDia = peso *30
const duracaoEstoqueDias = Math.floor(estoque / gramasPorDia)

console.log(`Nome do dog: ${nome}`)
console.log(`Peso:${peso}`)
console.log(`Gramas por dia: ${gramasPorDia}`)
console.log(`O estoque vai durar em dias: ${duracaoEstoqueDias}`)
*/

// Código da resolução aula - 2

function calcularConsumoDeRacao(nome, peso, estoque) {
    const gramasPorDia = peso * 30
    const duracaoEstoque = Math.floor(estoque / gramasPorDia)
  
    console.log(`----------------------`)
    console.log(`Nome do dog: ${nome}`)
    console.log(`Peso: ${peso}kg`)
    console.log(`Gramas por dia: ${gramasPorDia}g`)
    console.log(`O estoque vai durar: ${duracaoEstoque} dias`)
    console.log(`----------------------`)
  }
  
  calcularConsumoDeRacao('Ada', 1, 2000)
  calcularConsumoDeRacao('Laninha', 4.2, 15000)
  calcularConsumoDeRacao('Pantera', 14.5, 5000)
