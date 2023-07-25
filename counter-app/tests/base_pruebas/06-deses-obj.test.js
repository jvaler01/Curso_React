/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { usContext } from '../../src/base_pruebas/06-deses-obj';
describe('Test 06-deses-obj', ()=>{
    
     test('usContext return Object with name', () => {
        const clave = 'Valentine';
        const edad = 24;
        const persona = {
            nombre: 'Jill',
            edad: 24,
            clave: 'Valentine'
        };
        const testUsContext = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };
        const usContextData = usContext(persona);

        expect(testUsContext).toEqual(usContextData);
     });
})