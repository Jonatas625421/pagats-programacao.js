
/* 
describe -> agrupador de testes
it -> implementação do teste
TDD
    crio o teste
    vejo o teste falhar
    crio a implementação para o teste passar
    rodo o teste de novo
    refatoro o código
    ASSERTION/ASSERCAO
     verificar se um comportamento está de acordo com o esperado
*/
    import assert from 'node:assert';
    import { exibirNomeDogFormatado } from '../trabalho-final.js';
    
    describe('Testes do Projeto', () => {
        it('deve exibir o nome do dog com letras maiúsculas', () => {
            assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')

        // verifique se: valor atual é igual ao valor esperado
        })
        it('deve retornar uma string vazia se não passar nome', () => {
            assert.strictEqual(exibirNomeDogFormatado(''), '')
        })
        it('segundo teste', () => {
            throw new Error()
        })
    })