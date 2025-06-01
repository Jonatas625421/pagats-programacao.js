/**
 * Console API
 */

console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
   
    nome: "Jonatas",
    turma: "02,",
    disciplina: "Prog JS"

},
{
    nome: "Katiane",
    turma: "02,",
    disciplina: "Prog JS"

}])

/**
 * Constantes e variáveis
 */

// const - para informações que nunca mudam
// var ou let - informações que podem mudar

// Informações de um dog que não mudam
const nome = 'Loki'
const raca = 'SRD / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = "M"

// Informações que mudam
let idade = 5
let peso = 10.5
let vacinado = true
let cadastro = false
let tamanho = 'M'

// Hoisting - içamento ou elevação para o topo do arquivo, seu
//estado é indefinido.

console.log(irmaos)
var irmaos = ["thor","Hela"]


/**
 * Strings
 */

// 'Turma PGATS' - Aspas simples
// "Turma PGATS" - Aspas duplas


const numeroAula = "03"
const turma = "02"
let data = "05 de Abril"

console.log("Aula 03 da Turma " + turma + " no Sábado dia 05 de Abril")
console.log(`Aula ${numeroAula} da turma ${turma} no Sábado dia ${data}`)

const nomesDeAlunos = "Giulina André Goku Lucas Lenilson"
const nomesDeAlunosSplit = nomesDeAlunos.split(" ")

console.log(nomesDeAlunosSplit)

console.log(nomesDeAlunos.toLowerCase()) // mínusculo
console.log(nomesDeAlunos.toUpperCase()) // maísculo

// Exercício Individual


