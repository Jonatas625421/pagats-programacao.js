import { CATS, DOGS } from './exercicio-ind-export.js'

function entregarPetiscos(listaDeDogs) {
  listaDeDogs.forEach(dog => {
    console.log(`Entregando petisco para ${dog}`)
  })
}

entregarPetiscos(DOGS)
entregarPetiscos(CATS)

