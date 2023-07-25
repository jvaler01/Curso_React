/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getSaludo } from '../../src/base_pruebas/02-template-string';
describe('Test 02-template-string', ()=>{
    test('getSaludo return Hola Jill', () => { 
        const name = 'Jill';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
     })
})