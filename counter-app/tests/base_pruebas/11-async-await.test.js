/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getImagen } from '../../src/base_pruebas/11-async-await';

describe('Pruebas en 11-async-await.js', () => {
    test('getImagen debe de retornar un error si no tenemos api key', async() => {
        
        const resp = await getImagen();
        // expect( typeof url ).toBe('string');
        expect( resp ).toBe('No se encontro la imagen');

    });
});