
/* 
Trabalho final CI
Baseado na Disciplina de Programação para Automação de testes
Rodar testes em uma pipe manual
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
        
    })