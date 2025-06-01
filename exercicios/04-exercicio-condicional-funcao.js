/*
Plano de atividades para o Pet

Crie um script que defina o plano de atividades para os dogs 
durante a estadia. O script vai receber o porte (pequeno, médio 
ou grande); e o tempo disponível para a atividade representado 
em minutos. Exemplo:

Pantera - Médio - 45

Use uma condicional para decidir o tipo de atividade com base 
no porte: 
pequeno -> brincar dentro de casa
médio -> caminhada no quarteirão
grande -> correr no parque
qualquer outro -> porte inválido

Depois, uma condicional para ajustar a mensagem de acordo com o
tempo: 
menor que 15 -> "atividade rápida: [atividade]"
de 15 a 30 -> "tempo ideal: [atividade]"
acima de 30 -> "hora da diversão: [atividade]

*/

const nome = 'Pantera'
const porte = 'medio'
const tempo = 45

switch(porte) {
    case 'pequeno':
        atividade = `brincar dentro de casa`  
    break

    case 'medio':
        atividade = `Caminhada no quarteirão`    
    break 
    
    case 'medio':
        atividade = `Correr no parque`
    break 

    default:
        atividade = `porte invalido`
}

// console.log(`${porte}`)

let mensagem

if (tempo < 15) {
  mensagem = `atividade rápida`
} else if (tempo <= 30) {
  mensagem = `tempo ideal`
} else if (tempo > 30) {
  mensagem = `hora da diversão`
}

console.log(`--------------`)
console.log(`${ mensagem }: [${ atividade }]`)
console.log(`--------------`)

/* 
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para 
este Kata. O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas 
não fazem parte desse desafio.
*/

/*
Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings. 
*/

