
/*
Se quiser muito usar switch, 
dá para fazer um truque com true, tipo:
*/

/*
const peso = 10;

switch (true) {
    case peso <= 10:
        console.log('P');
        break;
    case peso <= 20:
        console.log('M');
        break;
    case peso <= 30:
        console.log('G');
        break;
    default:
        console.log('ND');
}
*/


/*
    escolha ou "switch" (condicao):
    caso ou "case" x: faça (ação)
     pause ou "break"
    caso ou "case" y: faça
     pause ou "break"
    caso ou "case" z: faça
     pause ou "break"
*/

const peso = 15

switch (peso) {
    case 10:
        console.log('p')
        break // pausa a execução!
    case 20:
        console.log('M')
        break // pausa a execução!
    case 30:
         console.log('G')
        break // pausa a execução!
    default:
        console.log('ND')
}
