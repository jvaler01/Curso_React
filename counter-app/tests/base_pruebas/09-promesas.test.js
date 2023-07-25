/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getHeroeByIdAsync } from '../../src/base_pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe de retornar un héroe', (done) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
    });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync( id )
           .then( hero => {
               expect( hero ).toBeFalsy();
               done();
           })
           .catch( error => {

                expect( error ).toBe(`No se pudo encontrar el héroe ${ id }`)

                done();
            });
    });
});