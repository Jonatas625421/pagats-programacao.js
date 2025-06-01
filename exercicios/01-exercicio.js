const nome = "Thomas", raca = "vira-lata" // Dados que não mudam
let idade = 1, peso = `1,2Kg` // Dados que mudam

let nameUpperCase = nome.toUpperCase()
let racaFirsletter = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()

const animal = {
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirsletter
}

console.table(animal)


