/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { getUser, getUsuarioActivo } from '../../src/base_pruebas/05-funciones';
describe('Test 05-funciones', ()=>{
    test('getUser return Object', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'asdf'
        };
        const user = getUser();

        expect(testUser).toEqual(user);
     });

     test('getUsuarioActivo return Object with name', () => {
        const name = 'Jill';
        const testUser = {
            uid: 'ABC567',
            username: name
        };
        const userActive = getUsuarioActivo(name);

        expect(testUser).toEqual(userActive);
        expect(testUser.username).toBe(userActive.username);
        expect(userActive.username).toBe(name);
     });
})